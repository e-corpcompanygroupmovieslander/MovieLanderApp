import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDCONTACTUS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}phone.png'/>

        </div>

        <br><br><br><br>

        <button>
        
            <h1 class='HolderName'>WhatsApp</h1>

            <img class='AppIcon' src='${ICONS}whatsapp.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Web Site</h1>

            <img class='AppIcon' src='${ICONS}internet.png'/>

        </button>

        <button>

            <h1 class='HolderName'>Instagram</h1>

            <img class='AppIcon' src='${ICONS}instagram.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Gmail</h1>

            <img class='AppIcon' src='${ICONS}gmail.png'/>

        </button>

        <button>

            <h1 class='HolderName'>Call US</h1>

            <img class='AppIcon' src='${ICONS}phone.png'/>

        
        </button>

    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

}

export{ANDROIDCONTACTUS}