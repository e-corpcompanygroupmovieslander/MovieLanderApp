import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDCOMMUNITYPAGE } from "../COMMUNITYPAGE/CommunityPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDUSERACCOUNTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}sun.png'/>

            <img class='DarkModeIcon' src='${ICONS}moon.png'/>

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

    const LIGHTMODE=document.querySelector('.LightModeIcon');

    const DARKMODE=document.querySelector('.DarkModeIcon');

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(DARKMODE,'display','none');

        STYLED(LIGHTMODE,'display','inline-flex');
        
   

    } else {
        
        STYLED(LIGHTMODE,'display','none');

        STYLED(DARKMODE,'display','inline-flex');
       
    }

    LIGHTMODE.onclick=()=>{

        DIV.style.background='#212121';

        STYLED(LIGHTMODE,'display','none');

        STYLED(DARKMODE,'display','inline-flex');

        if (localStorage.getItem('Device')==='Android') {

            ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

            StatusBar.backgroundColorByHexString('#212121');
            
        } else {
           
            console.log('Android Version Changed Colour');
            
        }

    }

    DARKMODE.onclick=()=>{

        DIV.style.background='#5C829A';

        STYLED(DARKMODE,'display','none');

        STYLED(LIGHTMODE,'display','inline-flex');

        if (localStorage.getItem('Device')==='Android') {

            ADVANCE.ADDSTORAGE('local','ModeColour','#5C829A');

            StatusBar.backgroundColorByHexString('#5C829A');
            
        } else {
           
            console.log('Android Version Changed Colour');
            
        }

    }
    
}

export{ANDROIDUSERACCOUNTPAGE}