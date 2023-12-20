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

    /*
    const linkElement = document.createElement('link');
    linkElement.rel = 'manifest';
    linkElement.href = './manifest.json';
    document.head.appendChild(linkElement);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    }

    */
   
}

export{CONNECTION}