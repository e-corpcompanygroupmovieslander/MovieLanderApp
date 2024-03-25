import { WINDOWSHOMEPAGE } from "../../PAGES/HomePage/homePage.js"
import { WINDOWSLOGINPAGE } from "../../PAGES/LoginPage/LoginPage.js"

const WINDOWSAUTOLOGIN=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('User')) {

        WINDOWSHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    } else {

        WINDOWSLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    }

}

export{WINDOWSAUTOLOGIN}