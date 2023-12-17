import { REQUESTAPI } from "../../APIS/Api.js";
import { USERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const COMMUNITYPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    const STYLED=ADVANCE.STYLED;

    CLEAR(DIV)

    DISPLAY(DIV,`

    <header>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img  class='SaveIcon' src='${ICONS}chat.png'/>
        
    </header>

    <input class='RequestMovie' type='text' placeholder='Request A Movie'>
    
    <div class='MovieDisplayDiv'></div>

    <button class='SendButton'>Send</button>
    
    `);

    const BackIcon=document.querySelector('.BackIcon');

    BackIcon.addEventListener('click',()=>{

        USERACCOUNTPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

    const REQUESTMOVIE=document.querySelector('.RequestMovie');

    const SENDBUTTON=document.querySelector('.SendButton');

    REQUESTMOVIE.addEventListener('input',()=>{

        if (REQUESTMOVIE.value.length>=1) {

            STYLED(REQUESTMOVIE,'width','74%');
            STYLED(SENDBUTTON,'display','block');
            
        } else {
            
            STYLED(REQUESTMOVIE,'width','95%');
            STYLED(SENDBUTTON,'display','none');

        }

    })

    SENDBUTTON.addEventListener('click',()=>{

        

        REQUESTAPI

    })
    
    

   



}

export{COMMUNITYPAGE}