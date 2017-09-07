/*
global  isPhabletSize
 */
(function() {
    "use strict";
    $(document).ready(function () {
        function resizeBox(){
            var maxHeight = 0;
            $('.autosize-box.box').each(function(){
                $(this).css('height','auto');
                $(this).css('min-height',$(this).height());
                if($(this).height()>maxHeight){
                    maxHeight = $(this).height();
                }
            });
            $('.autosize-box.box').each(function(){
                if(isPhabletSize()){
                    $(this).css('height','auto');
                }
                else{
                    $(this).height(0);
                    $(this).height(maxHeight);
                }
            });
        }
        $(window).on('resize', resizeBox);
        resizeBox();
        window.setTimeout(resizeBox, 200);
    });
}
)();