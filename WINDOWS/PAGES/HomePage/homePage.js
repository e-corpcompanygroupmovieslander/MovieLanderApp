import { STYLED } from "../../../CONNECTION/Connection.js";

const WINDOWSHOMEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
    <div class='WindowsHeader'>

        <div class='WindowsrightHolder'>

            <img src='${ICONS}notifications.png' class=''/>

            <img src='${ICONS}sun.png' class='WindowsLight'/>

            <img src='${ICONS}moon.png' class='WindowsDark'/>

            <img src='${ICONS}user.png' class=''/>

        </div>

 

    
    </div>

    <div class='WindowsDivHolder'></div>

    `);

    //APPMODES

    const LIGHTMODE=document.querySelector('.WindowsLight');

    const DARKMODE=document.querySelector('.WindowsDark');

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(DARKMODE,'display','block');

        STYLED(LIGHTMODE,'display','none');
        
   

    } else {
        
        STYLED(LIGHTMODE,'display','block');

        STYLED(DARKMODE,'display','none');
       
    }

    LIGHTMODE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

        DIV.style.background='#212121';

        STYLED(DARKMODE,'display','block');

        STYLED(LIGHTMODE,'display','none');

    })

    DARKMODE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','ModeColour','#5C829A');

        STYLED(LIGHTMODE,'display','block');

        STYLED(DARKMODE,'display','none');

        DIV.style.background='#5C829A';

    })


}

export{WINDOWSHOMEPAGE}
