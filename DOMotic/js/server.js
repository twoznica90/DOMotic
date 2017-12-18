// Server Component
// Used to post data back to the server.
// Actually only applied to temperature and only simulated, as data persistence is not required.

Server = (function () {
    
    var SERVER_DATA_FILE = "./data/system.json";

    var send = function (data_name, data_value) {

        $.post( SERVER_DATA_FILE, "{" + data_name + " : " + data_value + "}");

    };



    return {
        send: send,
        SERVER_DATA_FILE: SERVER_DATA_FILE
    }

})();