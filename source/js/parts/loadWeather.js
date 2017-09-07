"use strict";
(function(){
    $(document).ready(function(){
        $.getJSON('http://weather.parkhotel-bayersoien.de/', function(data){
            /*jshint camelcase: false */
            $('#temperature').html( Math.floor((parseFloat(data.main.temp_min)/2.0 + parseFloat(data.main.temp_max, 10)/2.0)-273.15));
            /*jshint camelcase: true */
            $('#icon').addClass("weather-icon");
            $('#icon').addClass("i"+data.weather[0].icon);
        });
        
    });
})();