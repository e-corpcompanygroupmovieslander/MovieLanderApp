import { ANDROIDLOGOUTPAGE } from "../LOGOUTPAGE/LogOutPage.js";
import { ANDROIDPARENTALCONTROL } from "../PARENTALCONTROL/ParentalControl.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDSETTINGSPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}setting.png'/>

        </div>
        <br><br><br><br>

        <button class='AppPlayer'>

            <h1 class='HolderName'>App Player</h1>

            <img class='AppIcon' src='${ICONS}movies.png'/>
    
        </button>

        <button>

            <h1 class='HolderName'>Connect Device</h1>

            <img class='AppIcon' src='${ICONS}secretcode.png'/>
        
        </button>

        <button class='ParentalControl'>

            <h1 class='HolderName'>Parental Control</h1>

            <img class='AppIcon' src='${ICONS}parentalcontrol.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Privacy Policy</h1>

            <img class='AppIcon' src='${ICONS}privacypolicy.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Help </h1>

            <img class='AppIcon' src='${ICONS}help.png'/>
    
        </button>

        <button>
        
            <h1 class='HolderName'>Updates </h1>

            <img class='AppIcon' src='${ICONS}upload.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Delete Account </h1>

            <img class='AppIcon' src='${ICONS}delete.png'/>
        
        </button>

        <button class='LogOut'>

            <h1 class='HolderName'>LogOut </h1>

            <img class='AppIcon' src='${ICONS}logout.png'/>
        
        </button>


    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const LOGOUT=document.querySelector('.LogOut');

    LOGOUT.addEventListener('click',()=>{

        ANDROIDLOGOUTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const PARENTALCONTROL=document.querySelector('.ParentalControl');

    PARENTALCONTROL.addEventListener('click',()=>{

        ANDROIDPARENTALCONTROL(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const APPPLAYER=document.querySelector('.AppPlayer');
    
    APPPLAYER.addEventListener('click',()=>{

        if (localStorage.getItem('AppPlayer')) {

            if (localStorage.getItem('AppPlayer')==='Drive') {

                localStorage.setItem('AppPlayer','LanderPlayer')
                
            } else {
                
                localStorage.setItem('AppPlayer','Drive')

            }
            
        }

        alert('Player Type Changed')

    })


}

export{ANDROIDSETTINGSPAGE}