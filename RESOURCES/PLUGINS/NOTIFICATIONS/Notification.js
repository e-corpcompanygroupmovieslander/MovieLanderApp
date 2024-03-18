//NOTIFICATIONS PLUGIN
const NOTIFICATIONS=(TITLE,MESSAGE)=>{

    if (localStorage.getItem('Environment')==='Production') {

        if (localStorage.getItem('AppNotifications')==='TRUE') {

            VIBRATION(500)
           
            Android.showNotification(`${TITLE}`, `${MESSAGE}`);
            
        } else {
            
            APPNOTIFICATIONS()

        }

    } else {
        
        // Check if the browser supports the Notification API
        if ("Notification" in window) {
            // Request permission from the user
            Notification.requestPermission().then(function (permission) {
            // If the user grants permission
            if (permission === "granted") {
                // Display a notification
                var options = {
                body: MESSAGE,
                icon: "/app/src/main/res/drawable/app_icon.jpg"
                };

                if (localStorage.getItem('AppNotifications')==='TRUE') {

                    VIBRATION(500)
                   
                    var notification = new Notification(TITLE, options);
                    
                } else {
                    
                    APPNOTIFICATIONS()
        
                }
                
            }
            });
        } else {
            console.log("This browser does not support notifications.");
        }
  
    }

}

export{NOTIFICATIONS}