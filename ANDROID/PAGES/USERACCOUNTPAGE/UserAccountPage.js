import { ANDROIDCOMMUNITYPAGE } from "../COMMUNITYPAGE/CommunityPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDUSERACCOUNTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}sun.png'/>

        </div>

        <div class='UserAccountDetails'></div>

        <button>Premium</button>

        <button class='Community'>Community</button>

        <button>Wish List</button>

        <button class='Settings'>Settings</button>

        <button>Connect Device</button>

        <button>More Apps</button>

        <button>Contact US</button>

    `)

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const COMMUNITY=document.querySelector('.Community');

    COMMUNITY.addEventListener('click',()=>{

        ANDROIDCOMMUNITYPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const SETTINGS=document.querySelector('.Settings');

    SETTINGS.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

}

export{ANDROIDUSERACCOUNTPAGE}