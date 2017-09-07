(function() {
    "use strict";
    $(document).ready(function ($) {

        function slickResizeFunction(el){
            if($(window).outerWidth() < 1440 &&! $(el).hasClass('slick-initialized')){
                $(el).slick({
                    slidesToShow: 1,
                    sildesToScroll: 1,
                    speed: 300,
                    variableWidth: false,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '20px',
                    arrows: false,
                    dots: true,
                    responsive: [
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: true,
                                centerMode: true,
                                arrows : false,
                                dots : true
                            }
                        }
                    ]
                });
            }
            else if($(window).outerWidth() >= 1440){
                if($(el).hasClass('slick-initialized')){
                    $(el).slick('unslick');
                    $(el).removeClass('slick-initialized');
                }
            }
        }

        $('.slick').each(function(){
           // var autoPlay = $(this).hasClass('autoplay');
            var arrows = $(this).hasClass('arrows');
            var dots = $(this).hasClass('dots');
            var noSwipe = $(this).hasClass('no-swipe');
            var elements = $(this).attr('data-slick-elements') || 1;
            var variableWidth = $(this).hasClass('variable-width');
            var onlyMobile = $(this).hasClass('slick-only-mobile');
            console.log($(this).attr('data-slick-elements'));
            if(onlyMobile){
                var el = $(this);
                $(window).on('resize',function(){
                    slickResizeFunction(el);
                });
                slickResizeFunction(el);


            }
            else if(!variableWidth){
                $(this).slick({
                    slidesToShow: elements,
                    sildesToScroll: 1,
                    speed: 300,
                    centerPadding: '20px',
                    arrows: arrows,
                    dots: dots,
                    swipe: !noSwipe,
                    responsive: [
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: true,
                                centerMode: true,
                                arrows : false,
                                dots : true
                            }
                        }
                    ]
                });
            }
            else{
                $(this).slick({
                    slidesToShow: 1,
                    sildesToScroll: 1,
                    speed: 300,
                    variableWidth: true,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '20px',
                    arrows: arrows,
                    dots: dots,
                    swipe: !noSwipe,
                    responsive: [
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 1,
                                arrows: false,
                                dots: true
                            }
                        }
                    ]
                });
            }

        });

    });

})(jQuery);
