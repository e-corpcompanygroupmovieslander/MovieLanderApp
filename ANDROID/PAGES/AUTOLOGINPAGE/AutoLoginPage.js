import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js"
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js"

const ANDROIDAUTOLOGINPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('User')) {

        if (localStorage.getItem('AppPlayer')) {

            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        } else {
           
            ANDROIDPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        }
        
    } else {
       
        ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)
        
    }
}

export{ANDROIDAUTOLOGINPAGE}