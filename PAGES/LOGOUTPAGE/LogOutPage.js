import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const LOGOUTPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    ADVANCE.REMOVESTORAGE('local','User');

    ADVANCE.REMOVESTORAGE('local','Premium');
    
    LOGINPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

}

export{LOGOUTPAGE}