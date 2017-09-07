(function() {
    "use strict";
    $(document).ready(function(){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://app.iiq-check.de/hotels/1011/widget_configurations/w.js?r=' + encodeURIComponent(document.URL);
        (function () {
            (document.getElementsByTagName('head')[0] || document.body).appendChild(script);
        })();
    });
})();