import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";
import { ANDROIDREQUESTMOVIEPAGE } from "./RequestMovie.js";

const ANDROIDCOMMUNITYPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}chat.png'/>

        </div>

        <br><br><br><br>

        <button class='RequestMovie'>

            <h1 class='HolderName'>Movie Requests </h1>

            <img class='AppIcon' src='${ICONS}liked.png'/>
        
        </button>


    `);

    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const REQUESTMOVIE=document.querySelector('.RequestMovie');

    REQUESTMOVIE.addEventListener('click',()=>{

        ANDROIDREQUESTMOVIEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })




}

export{ANDROIDCOMMUNITYPAGE}