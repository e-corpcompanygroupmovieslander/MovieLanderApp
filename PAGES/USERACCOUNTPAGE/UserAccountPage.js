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

            <button>Premium</button>

            <button>Community</button>

            <button>Settings</button>

            <button>Privacy Policy</button>

            <button>Saved Movies</button>

            <button>More Apps</button>

            <button>Contact Us</button>

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