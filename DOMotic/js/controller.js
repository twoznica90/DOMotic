// This script handles user actions on controls and binds them to the home components (lights, curtains, temperature).

$("#living-room-switch").click(function () {

    LightsCtrl.toggle('living-room-window');
    SoundCtrl.clickSound();
});


$("#upstairs-switch").click(function () {

    LightsCtrl.toggle('upstairs-window');
    SoundCtrl.clickSound();
});


$("#upstairs-curtain-button").click(function () {

    CurtainsCtrl.toggle('upstairs-curtain');
    SoundCtrl.windingSound();
});


$("#living-room-curtain-button").click(function () {

    CurtainsCtrl.toggle('living-room-curtain');
    SoundCtrl.windingSound();
});


$(".temp-up-button").click(function () {

    TempCtrl.up();
});

$(".temp-down-button").click(function () {

    TempCtrl.down();
});