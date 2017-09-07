(function() {
    "use strict";
    $(document).ready(function () {
        /**
         * ===============================================
         * Hide menu on scroll down and show again on scroll up
         * ===============================================
         */
        if(false){
            var scrollTop = 0;
            var moveMenuOff = 0;
            var safeHeightTop = 25; // Workaround to fix issue with iOS bounce
            var safeHeightBottom = 100; // Workaround to fix issue with iOS bounce
            // Hide menu on scroll
            $(document).scroll(function () {
                var _curScrollTop = $(document).scrollTop();
                if (!$('.nav-icon').hasClass('close-menu')) {
                    if (scrollTop !== _curScrollTop) {
                        if (safeHeightTop < _curScrollTop && scrollTop < _curScrollTop && _curScrollTop !== 0) {
                            if (moveMenuOff < $('.top-bar').outerHeight()) {
                                moveMenuOff += _curScrollTop - scrollTop;
                            }

                        }
                        else if (_curScrollTop === 0) {
                            $('.top-bar').css('transition', 'none');
                            moveMenuOff = 0;
                        }
                        else if (_curScrollTop > 0 && _curScrollTop + safeHeightBottom < ($(document).height() - $(window).height())) {
                            $('.top-bar').css('transition', '0.3s top ease-in-out');
                            moveMenuOff = 0;
                        }
                    }
                    $('.top-bar').css('top', '-' + moveMenuOff + 'px');
                    scrollTop = _curScrollTop;
                }

            });
        }

    });
})();