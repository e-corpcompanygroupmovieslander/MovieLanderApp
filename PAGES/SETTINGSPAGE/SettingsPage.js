import { LOGOUTPAGE } from "../LOGOUTPAGE/LogOutPage.js";
import { USERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const SETTINGSPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <header>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img  class='SaveIcon' src='${ICONS}setting.png'/>
        
    </header>

    <div class='UserDetails'>

        <button id='' class='UserAccountButtons'>

            <h1 class='buttonHolders'>Parental Control</h1>

            <img class='UserAccountImages' src='${ICONS}parentalcontrol.png'/>

        </button>

        <button id='' class='UserAccountButtons'>

            <h1 class='buttonHolders'>Connect To Device</h1>

            <img class='UserAccountImages' src='${ICONS}secretcode.png'/>

        </button>


        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>Privacy Policy</h1>

            <img class='UserAccountImages' src='${ICONS}privacypolicy.png'/>
        
        </button>

       
        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>Help</h1>

            <img class='UserAccountImages' src='${ICONS}help.png'/>
        
        </button>

        <button id='Settings' class='UserAccountButtons'>

            <h1 class='buttonHolders'>Updates</h1>

            <img class='UserAccountImages' src='${ICONS}app.png'/>
        
        </button>

        <button class='UserAccountButtons'>

            <h1 class='buttonHolders'>Delete Account</h1>

            <img class='UserAccountImages' src='${ICONS}Delete.png'/>
        
        </button>

        <button id='Logout' class='UserAccountButtons'>

            <h1 class='buttonHolders'>LogOut</h1>

            <img class='UserAccountImages' src='${ICONS}logout.png'/>
        
        </button>
    
    </div>

    `);

    const BackIcon=document.querySelector('.BackIcon');

    BackIcon.addEventListener('click',()=>{

        USERACCOUNTPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

    const LOGOUT=document.querySelector('#Logout');

    LOGOUT.addEventListener('click',()=>{

        LOGOUTPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

}

export{SETTINGSPAGE}