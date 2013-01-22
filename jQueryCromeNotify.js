jQuery.fn.powiadom = function (title, message){
    var notify = window.webkitNotifications;
    if (notify) {
        if (notify.checkPermission() == 0) {
            try{
                var myNotification = notify.createNotification(null, title, message); 
                myNotification.onclick = function() {

                    window.focus();
                    myNotification.cancel();
                    
                }
                myNotification.onshow  = myNotification.ondisplay = function() {
                    setTimeout(function() {
                        myNotification.cancel();
                    }, 10000);
                }
                myNotification.show();
            } catch(Err) {
                alert(Err.message);
            }
        }else{
            notify.requestPermission();
        }
    }
}
