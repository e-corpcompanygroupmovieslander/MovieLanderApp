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

                if (users.Premium) {
                    
                    ADVANCE.ADDSTORAGE('local','Premium','TRUE');

                } else {
                    
                    ADVANCE.REMOVESTORAGE('local','Premium');
                }
                            
            } else {

                ADVANCE.REMOVESTORAGE('local','User');
            
                ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)
                
            }

        }).catch((err) => {

            console.log(err)
        
        });
        
    } else {
       
        ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)
        
    }

}

export{ANDROIDAUTOLOGINPAGE}