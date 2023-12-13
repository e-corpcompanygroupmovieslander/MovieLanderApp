import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { GETUSERDETAILS } from "./GetUserDetails.js";

const USERACCOUNTPAGE=(DIV)=>{

    DIV.innerHTML=`

        <header>

            <img class='BackIcon' src='./IMAGES/Icons/back.png'/>
        
            <img class='ModeIcon' src='./IMAGES/Icons/sun.png'/>

        </header>

        <div class='UserDetails'>

            <div class='ProfileImageHolder'>
            
                <img class='ProfileImage' src='./IMAGES/Logos/movie lander logo.jpg'/>

            </div>

            <div class='UserDetailsHolder'></div>

            <div class='EmailHolder'></div>

        </div>

        <div class='FunctionsHolders'>

            <button>
            
                <h1 id='TagName'>Premium</h1>

                <img  id='TagImage' src='./IMAGES/Icons/lock.png'/>

            </button>

            
            <button>
            
                <h1 id='TagName'>Community</h1>

                <img  id='TagImage' src='./IMAGES/Icons/chat.png'/>

            </button>

            <button>
            
                <h1 id='TagName'>Settings</h1>

                <img  id='TagImage' src='./IMAGES/Icons/setting.png'/>

            </button>

            <button>
            
                <h1 id='TagName'>Privacy Policy</h1>

                <img  id='TagImage' src='./IMAGES/Icons/privacypolicy.png'/>

            </button>

            <button>
            
                <h1 id='TagName'>Saved Movies</h1>

                <img  id='TagImage' src='./IMAGES/Icons/saved.png'/>

            </button>

            <button>
            
                <h1 id='TagName'>More Apps</h1>

                <img  id='TagImage' src='./IMAGES/Icons/app.png'/>

            </button>

            <button>
            
                <h1 id='TagName'>Contact Us</h1>

                <img  id='TagImage' src='./IMAGES/Icons/phone.png'/>

            </button>

        </div>



        
    
    `;

    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        HOMEPAGE(DIV);

    })

    //FETCH USER DETAILS
    GETUSERDETAILS(DIV);
    

}

export{USERACCOUNTPAGE}