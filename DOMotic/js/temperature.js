// Temperature Control Component

TempCtrl = (function () {

    var CONST = {
        TEMP_MIN : 4,
        TEMP_MAX : 25
    }
    
    var temp = 17;

    var up = function () {
        if (temp < CONST.TEMP_MAX)
        {
            temp++;
            $('.temp-digits span').text(formatTemp(temp));
        }
    };

    var down = function () {
        if (temp > CONST.TEMP_MIN)
        {
            temp--;
            $('.temp-digits span').text(formatTemp(temp));
        }
    };

    var set = function (value) {
        $('.temp-digits span').text(formatTemp(value));
    };

    function formatTemp(val) {
        temp = val;
        Server.send("temperature", temp);
        
        if (temp < 10) {
            return "0" + temp + "°C";
        } else {
            return temp + "°C";
        }
        // 
        
    }


    return {
        up: up,
        down: down,
        set: set
    }

})();