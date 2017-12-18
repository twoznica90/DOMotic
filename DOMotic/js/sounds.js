// Sound effects Component

SoundCtrl = (function () {

    var clickSound = function () {

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', './assets/Button-click-sound.mp3');


        audioElement.play();

    };


    var windingSound = function () {

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', './assets/Winding-sound.mp3');


        audioElement.play();
    }


    return {
        clickSound: clickSound,
        windingSound: windingSound
    }

})();