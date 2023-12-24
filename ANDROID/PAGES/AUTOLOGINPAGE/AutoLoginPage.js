import { LOGINAPI } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js"
import { ANDROIDCREATEPRIVACYPOLICYPAGE } from "../CREATEACCOUNTPRIVACYPOLICY/CreateAccountPrivacyPolicy.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js"

const ANDROIDAUTOLOGINPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('User')) {

        if (localStorage.getItem('AppPlayer')) {

            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        } else {
           
            ANDROIDPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        }

        if (localStorage.getItem('Privacy')) {
            
            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

        } else {
           
            ANDROIDCREATEPRIVACYPOLICYPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        }

        ADVANCE.GETPACKAGE(LOGINAPI,'cors')

        .then((result) => {

            const users=result.find(user => user.SecretCode === localStorage.getItem('User') );

            if (users) {

                ADVANCE.ADDSTORAGE('Session','UserName',users.UserName);

                ADVANCE.ADDSTORAGE('Session','UserEmail',users.Email);

                if (users.Premium) {
                    
                    ADVANCE.ADDSTORAGE('local','Premium','TRUE');

                } else {
                    
                    ADVANCE.REMOVESTORAGE('local','Premium');
                }
                            
            } else {

                ADVANCE.REMOVESTORAGE('local','User');

                ADVANCE.REMOVESTORAGE('local','Premium');
            
                ADVANCE.REMOVESTORAGE('local','ParentalControlPin');
            
                ADVANCE.REMOVESTORAGE('local','AppPlayer');
            
                ADVANCE.REMOVESTORAGE('local','Privacy');
            
                ADVANCE.DELETESTORAGE('');
                
                ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
   
            }

        }).catch((err) => {

            console.log(err)
        
        });
        
    } else {

        ADVANCE.REMOVESTORAGE('local','User');

        ADVANCE.REMOVESTORAGE('local','Premium');
    
        ADVANCE.REMOVESTORAGE('local','ParentalControlPin');
    
        ADVANCE.REMOVESTORAGE('local','AppPlayer');
    
        ADVANCE.REMOVESTORAGE('local','Privacy');
    
        ADVANCE.DELETESTORAGE('');
       
        ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)
        
    }

}

export{ANDROIDAUTOLOGINPAGE}