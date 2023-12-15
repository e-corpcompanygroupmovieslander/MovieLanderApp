import { HOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js"

const AUTOLOGINPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    if (localStorage.getItem('User')) {

        HOMEPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    } else {

        LOGINPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);
        
    }

}

export{AUTOLOGINPAGE}