import { USERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const MOREAPPSPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
    <header>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img id='ModeIcon' class='SaveIcon' src='${ICONS}app.png'/>

    </header>

    `);

    const BackIcon=document.querySelector('.BackIcon');

    BackIcon.addEventListener('click',()=>{

        USERACCOUNTPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

}

export{MOREAPPSPAGE}