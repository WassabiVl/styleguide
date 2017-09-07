(function() {
    "use strict";
    $(document).ready(function () {
        $('.search').click(function(){
            $(this).children('i').toggleClass('active');
            var search = $('.search-field');
            search.toggleClass('active');
        });

    });

})();