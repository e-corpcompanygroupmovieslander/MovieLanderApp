import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDPREMIUMPAYMENT=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

    </div>

    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });


}

export{ANDROIDPREMIUMPAYMENT}