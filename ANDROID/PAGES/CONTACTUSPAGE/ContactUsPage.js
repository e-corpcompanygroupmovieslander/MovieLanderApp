import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDCONTACTUS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}phone.png'/>

        </div>

        <br><br><br><br>

        <button class='RateApp'>
        
            <h1 class='HolderName'>Rate This App</h1>

            <img class='AppIcon' src='${ICONS}star.png'/>
        
        </button>

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

    const RATEAPP=document.querySelector('.RateApp');

    RATEAPP.addEventListener('click',()=>{

        open('https://play.google.com/store/apps/details?id=com.ecorpcompanygroup.movie_lander&pcampaignid=web_share')

    })


}

export{ANDROIDCONTACTUS}