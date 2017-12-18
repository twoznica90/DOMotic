// Get system values from the server on document load.
// Server data are mocked with a json file.


$(document).ready(function(){

    //var SERVER_DATA_FILE = "./data/system.json";

    
    $.getJSON(Server.SERVER_DATA_FILE, function(data) {

        // Set initial temperature
        TempCtrl.set(data.temperature);
        
        // Set initial lights states
        if (data.lr_light)
            {
                LightsCtrl.switchOn('living-room-window');
            }
        if (data.u_light)
            {
                LightsCtrl.switchOn('upstairs-window');
            }
        
        // Set initial curtain states
        if (data.lr_curtain)
            {
                CurtainsCtrl.close('living-room-curtain');
            }
        if (data.u_curtain)
            {
                CurtainsCtrl.close('upstairs-curtain');
            }
        
    });



});

