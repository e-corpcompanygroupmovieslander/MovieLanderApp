import { LOGINAPI } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js"
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js"

const ANDROIDAUTOLOGINPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (!localStorage.getItem('User')) {

        if (localStorage.getItem('AppPlayer')) {

            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        } else {
           
            ANDROIDPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        }
        
    } else {
       
        ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)
        
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
            
            console.log('User Exists')
            
        } else {

            ADVANCE.REMOVESTORAGE('local','User');
           
            ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)
            
        }

    }).catch((err) => {

        console.log(err)
    
    });

    



}

export{ANDROIDAUTOLOGINPAGE}