import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDCONTACTUS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Reach Us</h1>

        </div>

        <br><br><br><br>

        <button class='RateApp'>
        
            <h1 class='HolderName'>Rate This App</h1>

            <img class='AppIcon' src='${ICONS}star.png'/>
        
        </button>

        <button class='WebSite'>

            <h1 class='HolderName'>Web Site</h1>

            <img class='AppIcon' src='${ICONS}internet.png'/>

        </button>

        <button class='Instagram'>

            <h1 class='HolderName'>Instagram</h1>

            <img class='AppIcon' src='${ICONS}instagram.png'/>
        
        </button>

        <button class='Gmail'>

            <h1 class='HolderName'>Gmail</h1>

            <img class='AppIcon' src='${ICONS}gmail.png'/>
    
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

    const INSTAGRAM=document.querySelector('.Instagram');

    INSTAGRAM.addEventListener('click',()=>{

        open('https://instagram.com/e_corpcompanygroup?igshid=YTQwZjQ0NmI0OA%3D%3D');

    })

    const WEBSITE=document.querySelector('.WebSite');

    WEBSITE.addEventListener('click',()=>{

        open('https://www.e-corpcompanygroup.com');

    })

    const GMAIL = document.querySelector('.Gmail');

    GMAIL.addEventListener('click', () => {
        window.location.href = 'mailto:movielander1999@gmail.com';
    });
    
}

export{ANDROIDCONTACTUS}
