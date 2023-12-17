import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDWISHLISTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}saved.png'/>

        </div>

        <div class='WishListDiv'></div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });



}

export{ANDROIDWISHLISTPAGE}