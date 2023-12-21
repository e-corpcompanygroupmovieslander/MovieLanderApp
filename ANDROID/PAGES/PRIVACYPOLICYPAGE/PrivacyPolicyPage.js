import { PRIVACYTEXT } from "../../../APIS/Api.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDPRIVACYPOLICY=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}privacypolicy.png'/>

        </div>

        <div class='PrivacyPolicyDiv'></div>
    
    `);
    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const PRIVACYPOLICYDIV=document.querySelector('.PrivacyPolicyDiv');

    DISPLAY(PRIVACYPOLICYDIV,`
    
        <img  id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `);

    fetch(PRIVACYTEXT)

    .then(res =>res.text())

    .then((result) => {

        CLEAR(PRIVACYPOLICYDIV);

        DISPLAY(PRIVACYPOLICYDIV,result);

    }).catch((err) => {

        console.log(err);
        
    });

}

export{ANDROIDPRIVACYPOLICY}