// Light Component

LightsCtrl = (function () {

    var CONST = {
        YELLOW: "rgb(255, 255, 0)",
        WHITE: "rgb(255, 255, 255)"
    }


    var switchOn = function (elmt) {
        var frames = $('#' + elmt + ' div');
        frames.each(function (index, div) {
            $(div).css("background-color", CONST.YELLOW);
        });
    };

    var switchOff = function (elmt) {
        var frames = $('#' + elmt + ' div');
        frames.each(function (index, div) {
            $(div).css("background-color", CONST.WHITE);
        });
    };


    var toggle = function (elmt) {
        var frames = $('#' + elmt + ' div');
        frames.each(function (index, div) {

            if ($(div).css("background-color") != CONST.YELLOW) {
                $(div).css("background-color", CONST.YELLOW);
            } else {
                $(div).css("background-color", CONST.WHITE);
            }

        });
    };




    return {
        switchOn: switchOn,
        switchOff: switchOff,
        toggle: toggle,
    }

})();