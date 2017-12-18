// Curtain Component

CurtainsCtrl = (function () {

    var DURATION_MS = 3000;

    var toggle = function (elmt) {
        $('#' + elmt).slideToggle(DURATION_MS);
    };


    var open = function (elmt) {
        $('#' + elmt).slideUp(DURATION_MS);
    };

    var close = function (elmt) {
        $('#' + elmt).slideDown(DURATION_MS);
    };


    return {
        open: open,
        close: close,
        toggle: toggle
    }

})();