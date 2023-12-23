import { UPDATEAPI } from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDLOGOUTPAGE } from "../LOGOUTPAGE/LogOutPage.js";
import { ANDROIDPARENTALCONTROL } from "../PARENTALCONTROL/ParentalControl.js";
import { ANDROIDPRIVACYPOLICY } from "../PRIVACYPOLICYPAGE/PrivacyPolicyPage.js";
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

        <button class='PrivacyPolicy'>

            <h1 class='HolderName'>Privacy Policy</h1>

            <img class='AppIcon' src='${ICONS}privacypolicy.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Help </h1>

            <img class='AppIcon' src='${ICONS}help.png'/>
    
        </button>

        <button class='Updates'>
        
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

        <div class='Messagediv'></div>

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

    const MESSAGEDIV=document.querySelector('.Messagediv');
    
    APPPLAYER.addEventListener('click',()=>{

        if (localStorage.getItem('ModeColour')==='#5C829A') {

            STYLED(MESSAGEDIV,'background','#5C829A');

            
        } else {
            
            STYLED(MESSAGEDIV,'background','#212121');
            
        }

        STYLED(MESSAGEDIV,'display','block');

        STYLED(MESSAGEDIV,'height','30%');

        DISPLAY(MESSAGEDIV,`

            <br>

            <button class='Drive'>
            
                <h1 class='HolderName'>Drive Player </h1>
    
                <img class='AppIcon' src='${ICONS}drive.png'/>

            </button>
    
            <button class='LanderPlayer'>
            
                <h1 class='HolderName'>Movie Lander Player </h1>
    
                <img id='LanderPlayer' class='AppIcon' src='${ICONS}lander.png'/>
            
            </button>

            <button class='Cancel'>

            
            <h1 class='HolderName'> Cancel </h1>
    
            <img class='AppIcon' src='${ICONS}close.png'/>

            </button>
        
        `)

        const CLOSEPLAYER=document.querySelector('.Cancel');

        CLOSEPLAYER.addEventListener('click',()=>{

            STYLED(MESSAGEDIV,'display','none');

            STYLED(MESSAGEDIV,'height','0%');

        })

        const DRIVEPLAYER=document.querySelector('.Drive');

        DRIVEPLAYER.addEventListener('click',()=>{

            ADVANCE.ADDSTORAGE('local','AppPlayer','Drive');

            STYLED(MESSAGEDIV,'display','none');

            STYLED(MESSAGEDIV,'height','0%');
                
        })

        const LANDERPLAYER=document.querySelector('.LanderPlayer');

        LANDERPLAYER.addEventListener('click',()=>{

            ADVANCE.ADDSTORAGE('local','AppPlayer','LanderPlayer');

            STYLED(MESSAGEDIV,'display','none');

            STYLED(MESSAGEDIV,'height','0%');

        })

    })

    const PRIVACYPOLICY=document.querySelector('.PrivacyPolicy');

    PRIVACYPOLICY.addEventListener('click',()=>{

        ANDROIDPRIVACYPOLICY(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const UPDATE=document.querySelector('.Updates');

    UPDATE.addEventListener('click',()=>{

        open(UPDATEAPI);

    });

}

export{ANDROIDSETTINGSPAGE}