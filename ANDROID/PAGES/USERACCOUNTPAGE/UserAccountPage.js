import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDPREMIUMPAYMENT } from "../ANDROIDPREMIUMPAYMENT/AndroidPremiumPayment.js";
import { ANDROIDCOMMUNITYPAGE } from "../COMMUNITYPAGE/CommunityPage.js";
import { ANDROIDCONTACTUS } from "../CONTACTUSPAGE/ContactUsPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDMOREAPPS } from "../MOREAPPS/MoreApps.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";
import { ANDROIDWISHLISTPAGE } from "../WISHLISTPAGE/WishListPage.js";
import { GETUSERDETAILS } from "./GetUserDetails.js";

const ANDROIDUSERACCOUNTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{
    
        
    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}sun.png'/>

            <img class='DarkModeIcon' src='${ICONS}moon.png'/>

        </div>

        <div class='UserAccountDetails'>

            <div class='ProfileImage'>

                <img class='ProfileUserImage'  src='https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/ASSETS/IMAGES/playstore.png'/>
            
            </div>

            <div class='UserDetailsHolder'>
            
            </div>
        
        
        </div>

        <button class='PremiumPayment'>
            
            <h1 class='HolderName'>Premium</h1>

            <img class='AppIcon' src='${ICONS}lock.png'/>

        </button>

        <button class='Community'>

            <h1 class='HolderName'>Community</h1>

            <img class='AppIcon' src='${ICONS}chat.png'/>
            
        </button>

        <button class='Wishlist'>

            <h1 class='HolderName'>WishList</h1>

            <img class='AppIcon' src='${ICONS}saved.png'/>
        
        </button>

        <button class='Settings'>

            <h1 class='HolderName'>Settings</h1>

            <img class='AppIcon' src='${ICONS}setting.png'/>
        
        </button>

        <button class='MoreApps'>

            <h1 class='HolderName'>More Apps</h1>

            <img class='AppIcon' src='${ICONS}app.png'/>
        
        </button>

        <button class='ContactUs'>

            <h1 class='HolderName'>Contact US</h1>

            <img class='AppIcon' src='${ICONS}phone.png'/>
        
        </button>

    `)

    GETUSERDETAILS(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const COMMUNITY=document.querySelector('.Community');

    COMMUNITY.addEventListener('click',()=>{

        ANDROIDCOMMUNITYPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const SETTINGS=document.querySelector('.Settings');

    SETTINGS.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const LIGHTMODE=document.querySelector('.LightModeIcon');

    const DARKMODE=document.querySelector('.DarkModeIcon');

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(DARKMODE,'display','none');

        STYLED(LIGHTMODE,'display','inline-flex');
        
   

    } else {
        
        STYLED(LIGHTMODE,'display','none');

        STYLED(DARKMODE,'display','inline-flex');
       
    }

    LIGHTMODE.onclick=()=>{

        DIV.style.background='#212121';

        STYLED(LIGHTMODE,'display','none');

        STYLED(DARKMODE,'display','inline-flex');

        if (localStorage.getItem('Device')==='Android') {

            ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

            StatusBar.backgroundColorByHexString('#212121');
            
        } else {
           
            console.log('Android Version Changed Colour');
            
        }

    }

    DARKMODE.onclick=()=>{

        DIV.style.background='#5C829A';

        STYLED(DARKMODE,'display','none');

        STYLED(LIGHTMODE,'display','inline-flex');

        if (localStorage.getItem('Device')==='Android') {

            ADVANCE.ADDSTORAGE('local','ModeColour','#5C829A');

            StatusBar.backgroundColorByHexString('#5C829A');
            
        } else {
           
            console.log('Android Version Changed Colour');
            
        }

    }

    const WISHLIST=document.querySelector('.Wishlist');

    WISHLIST.addEventListener('click',()=>{

        ANDROIDWISHLISTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const MOREAPPS=document.querySelector('.MoreApps');

    MOREAPPS.addEventListener('click',()=>{

        ANDROIDMOREAPPS(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const CONTACTUS=document.querySelector('.ContactUs');

    CONTACTUS.addEventListener('click',()=>{

        ANDROIDCONTACTUS(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const PREMIUMPAGE=document.querySelector('.PremiumPayment');

    PREMIUMPAGE.addEventListener('click',()=>{

        localStorage.setItem('PayPremium','Direct');

        ANDROIDPREMIUMPAYMENT(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })
    
}

export{ANDROIDUSERACCOUNTPAGE}