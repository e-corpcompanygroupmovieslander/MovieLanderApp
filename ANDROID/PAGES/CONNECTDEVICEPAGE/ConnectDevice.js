import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDCONNECTDEVICE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    ADVANCE.DISPLAYDATA(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Connect to Desktop</h1>

        </div>

        <div class='PrivacyPolicyDiv'>
    
            <h1 class='ConnectTitle'>Desktop Connection Password</h1>

            <button>${localStorage.getItem('User')}</button>

            <h1 class='ConnectTitle'>Gives A USer Full Access to their Account On Desktop</h1>
        
        </div>
    
    `)

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });


}

export{ANDROIDCONNECTDEVICE}