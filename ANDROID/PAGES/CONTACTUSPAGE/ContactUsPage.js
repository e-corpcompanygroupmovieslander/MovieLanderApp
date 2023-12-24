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

        <button class='WhatsApp'>
        
            <h1 class='HolderName'>WhatsApp</h1>

            <img class='AppIcon' src='${ICONS}whatsapp.png'/>
        
        </button>

        <button class='WebSite'>

            <h1 class='HolderName'>Web Site</h1>

            <img class='AppIcon' src='${ICONS}internet.png'/>

        </button>

        <button class='Instagram'>

            <h1 class='HolderName'>Instagram</h1>

            <img class='AppIcon' src='${ICONS}instagram.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>

                <a href="mailto:movielander1999@gmail.com">Gmail</a>
            
            </h1>

            <img class='AppIcon' src='${ICONS}gmail.png'/>

        </button>

        <button class='Calls'>

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

    const WHATSAPP = document.querySelector('.WhatsApp');

    WHATSAPP.addEventListener('click', () => {
        // Replace '123456789' with the actual phone number
        const phoneNumber = '781476124';

        // Create a WhatsApp URL with the phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}`;

        // Open WhatsApp in a new window or tab
        window.open(whatsappUrl, '_blank');
    });

    const INSTAGRAM=document.querySelector('.Instagram');

    INSTAGRAM.addEventListener('click',()=>{

        open('https://instagram.com/e_corpcompanygroup?igshid=YTQwZjQ0NmI0OA%3D%3D');

    })

    const WEBSITE=document.querySelector('.WebSite');

    WEBSITE.addEventListener('click',()=>{

        open('https://www.e-corpcompanygroup.com');

    })

}

export{ANDROIDCONTACTUS}