import { HOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js"

const AUTOLOGINPAGE=(DIV)=>{

    if (localStorage.getItem('User')) {

        HOMEPAGE(DIV);
        
    } else {
        
        LOGINPAGE(DIV);

    }

}

export{AUTOLOGINPAGE}