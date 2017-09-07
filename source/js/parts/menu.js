/* global isSmartPhoneSize, isTabletSize, isHeigthLow */
(function() {
    "use strict";
    $(document).ready(function () {

        var nav = $('.menu');
        var navWrapper = $('.nav-wrapper');


        /**
         * ===============================================
         * Open/Close Menu
         * ===============================================
         */

            // Save scrollPos (iOS Hack)
        var scrollPos = 0;
        $('.menu-icon').click(function () {
            if ($(this).hasClass('close-menu')) {
                nav.removeClass('show');
                navWrapper.removeClass('show');
                $('html').removeClass('noscroll');
                $('body').removeClass('noscroll');
                $(this).removeClass('close-menu');
                if (isTabletSize() || isHeigthLow()) {
                    console.log(scrollPos);
                    $('body').scrollTop(scrollPos);
                }
            }
            else {
                scrollPos = $('body').scrollTop();
                nav.addClass('show');
                navWrapper.addClass('show');
                $('html').addClass('noscroll');
                $('body').addClass('noscroll');
                $(this).addClass('close-menu');
                if (isTabletSize() || isHeigthLow()) {
                    // For a smooth scroll
                    $('.nav-list').addClass('noscroll');
                }


            }

        });

        $(window).resize(function () {
            if ($('.nav-icon').hasClass('close-menu')) {
                if (isSmartPhoneSize() || isHeigthLow()) {
                    $('html').addClass('noscroll');
                    $('body').addClass('noscroll');
                    scrollPos = $('body').scrollTop();
                }
                else {
                    $('html').removeClass('noscroll');
                    $('body').removeClass('noscroll');
                    $('body').scrollTop(scrollPos);
                }
            }
        });

        // iOS Hack to avoid hover side-effects (also for other devices) in Menu
        var touchHack = document.addEventListener('touchstart', function () {
            $('.nav-effect').remove();
            touchHack = '';
        }, false);



        /**
         * ===============================================
         * Hide menu on scroll down and show again on scroll up
         * ===============================================
         */
        var stickPos = 234;
        var menuInnerWrapperHeight = $('.menu-inner-wrapper').height();
        $(document).on('scroll',function(){
            var windowPos = $(document).scrollTop();

            if(windowPos > stickPos && !isTabletSize()){
                $('.menu-inner-wrapper').css('position', 'fixed');
                $('.menu-inner-wrapper').css('width', '1370px');
                $('.menu-inner-wrapper').css('top', '3rem');
                $('.menu-inner-wrapper').css('margin-top', '0');
                $('.menu-inner-wrapper').css('left', '50%');
                $('.menu-inner-wrapper').css('z-index', '100');
                $('.menu-inner-wrapper').css('background', '#fff');


                $('.menu-inner-wrapper').css('transform', 'translateX(-50%)');

                $('.menu-wrapper').css('padding-bottom', menuInnerWrapperHeight);
            }
            else{
                $('.menu-inner-wrapper').css('position', 'relative');
                $('.menu-inner-wrapper').css('top', '0');
                $('.menu-inner-wrapper').css('width', '100%');
                $('.menu-inner-wrapper').css('margin-top', '1.5rem');
                $('.menu-inner-wrapper').css('transform', 'none');
                $('.menu-inner-wrapper').css('left', '0');
                $('.menu-wrapper').css('padding-bottom', 0);
            }

        });
        
        $(document).trigger('scroll');

        // Special trick to display the User-Menu if some item is focus in the inner
        var extraWrapper =  $('.nav-wrapper-extra .icon-user');

        function checkTriggerState(){
            var isFocus = false;
            extraWrapper.find('input, a').each(function(){
                if($(this).is(':focus')){
                    isFocus = true;
                }
            });
            if(extraWrapper.is(':focus')){
                isFocus = true;
            }
            if(isFocus){
                extraWrapper.addClass('inner-focus');
            }
            else{
                // Recheck, jQuery is slower then the Tab-event
                setTimeout(function(){
                    extraWrapper.find('input, a').each(function(){
                        if($(this).is(':focus')){
                            isFocus = true;
                        }
                    });
                    if(extraWrapper.is(':focus')){
                        isFocus = true;
                    }
                    if(!isFocus) {
                        extraWrapper.removeClass('inner-focus');
                    }
                },30);
            }
        }
        extraWrapper.on('focusin', checkTriggerState);
        extraWrapper.on('focusout', checkTriggerState);
        extraWrapper.each(function(){
            $(this).on('focusin', checkTriggerState);
            $(this).on('focusout', checkTriggerState);
        });


        $('.drop-down').click(function(){
            $(this).parent().toggleClass('open');
        });

        $('.book').click(function(){
           $('#d21-quickbook').toggle();
        });
    });
})();