import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDMOREAPPS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}app.png'/>

        </div>

        <div class='WishListDiv'></div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

}

export{ANDROIDMOREAPPS}