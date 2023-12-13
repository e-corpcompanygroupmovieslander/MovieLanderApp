import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { MOVIESDETAILS } from "../MOVIESDETAILS/MoviesDetails.js";

const MOVIESSETUPPAGE=(DIV,element)=>{

    DIV.innerHTML=`

    <header>

        <img class='BackIcon' src='./IMAGES/Icons/back.png'/>

        <img class='SaveIcon' src='./IMAGES/Icons/save.png'/>
    
    </header>

    <iframe class='TrailorPlayer' src="https://www.youtube-nocookie.com/embed/${element.MoveTrailer}?autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <button>Play</button>

    <div class='HolderSections'>

        <h1>${element.MovieName}</h1>

        <div class='DetailsHolders'>

            <div class='SectionsHolders'>

                <img id='SectionsImages' src='./IMAGES/Icons/grid.png'/>

                <h1 id='Catergory'>${element.Catergory}</h1>
            
            </div>

            <div class='SectionsHolders'>

                <img class='Premium' id='SectionsImages' src=''/>

                <h1 class='PremiumHolder' id='Catergory'></h1>
        
            </div>

            <div class='SectionsHolders'>

                <img id='SectionsImages' src='./IMAGES/Icons/menu (1).png'/>

                <h1 id='Catergory'>${element.Rated}</h1>
        
            </div>


        </div>
    
    </div>

    <footer>

        <img src='./IMAGES/Icons/review.png'/>

        <img id='MoviesDetailsIcon' src='./IMAGES/Icons/library.png'/>

        <img id='MenuIcon' src='./IMAGES/Icons/menu.png'/>
    
    </footer>
    
    
    `;

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        HOMEPAGE(DIV);

    })
    
    const Premium=document.querySelector('.Premium');

    const PremiumHolder=document.querySelector('.PremiumHolder');

    if (element.Subscription) {
        
        Premium.src=`./IMAGES/Icons/lock.png`;

        PremiumHolder.innerHTML='Paid';

    } else {
        
        Premium.src=`./IMAGES/Icons/unlocked.png`;

        PremiumHolder.innerHTML='Free';

    }

    const MOVIESDETAILSICON=document.querySelector('#MoviesDetailsIcon');

    MOVIESDETAILSICON.addEventListener('click',()=>{

        MOVIESDETAILS(DIV,element);

    })

}

export{MOVIESSETUPPAGE}