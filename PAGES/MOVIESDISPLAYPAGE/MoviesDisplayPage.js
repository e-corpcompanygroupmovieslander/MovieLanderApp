import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const MOVIESDISPLAY=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS,element)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <header>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img class='SaveIcon' src='${ICONS}save.png'/>
    
    </header>

    <div class='TrailorHolder'>

    <iframe class='Player' src="https://www.youtube-nocookie.com/embed/${element.MoveTrailer}?autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    </div>

    <button>Play</button>

    <div class='DetailsHolder'>

        <h1 class='MovieName'>${element.MovieName}</h1>

        <div class='DetailsDisplay'>

            <div class='Holders'>

                <img src='${ICONS}grid.png'/>

                <h1 class='Sections' >${element.Catergory}</h1>
            
            </div>

            <div class='Holders'>

                <img id='PremiumIcon' src=''/>

                <h1 class='Sections' id='Premium' ></h1>
            
            </div>

            <div class='Holders'>

                <img src='${ICONS}menu (1).png'/>

                <h1 class='Sections' >${element.Rated}</h1>
            
            </div>
        
        </div>
    
    
    </div>

    <footer>

        <img src='${ICONS}review.png'/>

        <img src='${ICONS}library.png'/>

        <img class='menuicon' src='${ICONS}menu.png'/>

    </footer>
    
    `);

    const BackIcon=document.querySelector('.BackIcon');

    BackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

    const PREMIUM=document.querySelector('#Premium');

    const PREMIUMICON=document.querySelector('#PremiumIcon')

    if (element.Subscription) {

        PREMIUM.innerHTML=`Paid`;

        PREMIUMICON.src=`${ICONS}lock.png`;
        
    } else {
        
        PREMIUM.innerHTML=`Free`;

        PREMIUMICON.src=`${ICONS}unlocked.png`;

    }

}

export{MOVIESDISPLAY}