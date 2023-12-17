import { ANDROIDAUTOLOGINPAGE } from "../ANDROID/PAGES/AUTOLOGINPAGE/AutoLoginPage.js";
import * as ADVANCE from "../CONNECTION/Connection.js"
import { WEBHOMEPAGE } from "../WEB/PAGES/HOMEPAGE/HomePage.js";


const CONNECTION=(DIV)=>{

    ADVANCE.OPERATINGSYSTEM();

    ADVANCE.ZOOMEFFECT();

    const ADD=ADVANCE.ADDPACKAGE;

    const CLEAR=ADVANCE.CLEARCOMPONENTS;

    const DISPLAY=ADVANCE.DISPLAYDATA;

    const ICONS=ADVANCE.ICONSPATH;

    console.log(ADVANCE);

    if (localStorage.getItem('Device')==='Web') {
       
        WEBHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
        
    } else {
      
        ANDROIDAUTOLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    }


    
}

export{CONNECTION}