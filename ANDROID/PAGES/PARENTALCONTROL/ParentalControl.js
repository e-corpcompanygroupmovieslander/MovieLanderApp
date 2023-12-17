import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDPARENTALCONTROL=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}parentalcontrol.png'/>

        </div>

        <div class='ChatDivMessages'></div>

        <input class='RequestMovieInput' type='text' placeholder='Enter Your Pin'/>
    
        <button class='RequestSendButton'>Sumbit</button>

    `);

    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

}

export{ANDROIDPARENTALCONTROL}