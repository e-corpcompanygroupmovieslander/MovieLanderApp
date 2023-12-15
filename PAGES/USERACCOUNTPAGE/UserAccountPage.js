import { STYLED } from "../../CONNECTION/Connection.js";
import { COMMUNITYPAGE } from "../COMMUNITYPAGE/CommunityPage.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { SETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const USERACCOUNTPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <header>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img id='ModeIcon' class='SaveIcon' src='${ICONS}sun.png'/>

        <img id='DarkModeIcon' class='SaveIcon' src='${ICONS}moon.png'/>

    </header>

    <div class='UserDetails'>

        <div class='UserHolderDetails'></div>

        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>Premium</h1>

            <img class='UserAccountImages' src='${ICONS}lock.png'/>
        
        </button>

        <button id='Community' class='UserAccountButtons'>

            <h1 class='buttonHolders'>Community</h1>

            <img class='UserAccountImages' src='${ICONS}chat.png'/>
        
        </button>

        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>Wish List</h1>

            <img class='UserAccountImages' src='${ICONS}saved.png'/>
        
        </button>

        <button id='Settings' class='UserAccountButtons'>

            <h1 class='buttonHolders'>Settings</h1>

            <img class='UserAccountImages' src='${ICONS}setting.png'/>
        
        </button>

        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>More Apps</h1>

            <img class='UserAccountImages' src='${ICONS}app.png'/>
        
        </button>

        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>Contact Us</h1>

            <img class='UserAccountImages' src='${ICONS}phone.png'/>
        
        </button>
    
    </div>
    
    
    `);

    const BackIcon=document.querySelector('.BackIcon');

    BackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

    const MODE=document.querySelector('#ModeIcon');

    const DARKMODE=document.querySelector('#DarkModeIcon');

    const themeColorMetaTag = document.getElementById('theme-color-meta');

    if (localStorage.getItem('ModeColour')==='#212121') {

        STYLED(MODE,'display','inline-flex');

        STYLED(DARKMODE,'display','none');
        
    } else {
        
        STYLED(MODE,'display','none');

        STYLED(DARKMODE,'display','inline-flex');

    }

    MODE.addEventListener('click',()=>{

        if (localStorage.getItem('Device') ==='Android') {
           
             // Set the status bar to a specific color
            StatusBar.backgroundColorByHexString('#212121');
            
        } else {
            
            themeColorMetaTag.setAttribute('content', '#212121');

        }

        STYLED(DIV,'background','#212121');

        ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

        STYLED(MODE,'display','none');

        STYLED(DARKMODE,'display','inline-flex');

    })

    DARKMODE.addEventListener('click',()=>{

        if (localStorage.getItem('Device') ==='Android') {
           
             // Set the status bar to a specific color
            StatusBar.backgroundColorByHexString('#5C829A');
            
        } else {
           
            themeColorMetaTag.setAttribute('content', '#5C829A');
            
        }

        STYLED(DIV,'background','#5C829A');

        ADVANCE.ADDSTORAGE('local','ModeColour','#5C829A');

        STYLED(MODE,'display','inline-flex');

        STYLED(DARKMODE,'display','none');

    })

    const COMMUNITYBUTTON=document.querySelector('#Community');

    COMMUNITYBUTTON.addEventListener('click',()=>{

        COMMUNITYPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

    const SETTINGS=document.querySelector('#Settings');

    SETTINGS.addEventListener('click',()=>{

        SETTINGSPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })


}

export{USERACCOUNTPAGE}