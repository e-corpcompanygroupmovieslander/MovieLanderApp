import { STYLED } from "../../CONNECTION/Connection.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

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

        <button>Premium</button>

        <button>Commnunity</button>

        <button>Wish List</button>

        <button>Settings</button>

        <button>Contact Us</button>

        <button>More Apps</button>

    
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

}

export{USERACCOUNTPAGE}