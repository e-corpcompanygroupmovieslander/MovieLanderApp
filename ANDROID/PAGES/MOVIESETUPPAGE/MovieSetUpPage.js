import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const MOVIESETUPPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}save.png'/>

        </div>

        <div class='TrailorPlayer'>

            <iframe class='Player' src="https://www.youtube-nocookie.com/embed/${element.MoveTrailer}?autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        </div>

        <button class='WatchMovieButton'>Play</button>

        <div class='MovieDetailsHolder'></div>
    

        <div class='AndroidFooter'>

            <img src='${ICONS}review.png'/>

            <img class='DetailsIcon' src='${ICONS}library.png'/>

            <img id='MenuIcon' class='ProfileIcon' src='${ICONS}menu.png'/>
        
        </div>

        <div class='DetailsDiv'>

            ${element.MovieDetails}

            <img class='CloseIcon' src='${ICONS}close.png'/>

        </div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const DETAILSICON=document.querySelector('.DetailsIcon');

    const DETAILSDIV=document.querySelector('.DetailsDiv');

    const CLOSEICON=document.querySelector('.CloseIcon');

    CLOSEICON.addEventListener('click',()=>{
        
        STYLED(DETAILSDIV,'height','0');

    })

    DETAILSICON.addEventListener('click',()=>{

        if (element.MovieDetails) {

            STYLED(DETAILSDIV,'height','100%');
            
        } else {
           
            STYLED(DETAILSDIV,'height','0');

        }



    })

}

export{MOVIESETUPPAGE}