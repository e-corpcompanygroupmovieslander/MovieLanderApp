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

        <div class='MovieDetailsHolder'>

            <h1 class='MovieName'>${element.MovieName}</h1>

            <div class='SegegmetsHolders' >

                <div class='HolderSectionsMovies'>

                    <img class='CatergoryHolder' src='${ICONS}grid.png'/>
                
                    <h1 class='CatergoryName'>${element.Catergory}</h1>

                </div>

                <div class='HolderSectionsMovies'>

                    <img id='PremiumIcon' class='CatergoryHolder' src=''/>
                    
                    <h1  id='PremiumName' class='CatergoryName'></h1>
                
                </div>

                <div class='HolderSectionsMovies'>

                    
                    <img class='CatergoryHolder' src='${ICONS}menu (1).png'/>
                    
                    <h1 class='CatergoryName'>${element.Rated}</h1>
                
                </div>
            
            </div>
        
        </div>
    

        <div class='AndroidFooter'>

            <img src='${ICONS}review.png'/>

            <img class='DetailsIcon' src='${ICONS}library.png'/>

            <img id='MenuIcon' class='ProfileIcon' src='${ICONS}menu.png'/>
        
        </div>

        <div class='DetailsDiv'>

            ${element.MovieDetails}

            <img class='CloseIcon' src='${ICONS}close.png'/>

        </div>

        <div class='SelectPlayer'>

        <h1 class='OpenWith'>Open With</h1>

        <button>

            <h1 class='HolderName'>Drive Player</h1>

            <img class='AppIcon' src='${ICONS}drive.png'/>
        
        </button>

        <button>

            <h1 class='HolderName'>Movie Lander Player</h1>

            <img class='AppIcon' src='${ICONS}phone.png'/>
        
        </button>
        
        </div>
    
    `);

    const PREMIUMICON=document.querySelector('#PremiumIcon');

    const PREMIUMNAME=document.querySelector('#PremiumName');

    if (element.Subscription) {
        
        PREMIUMICON.src=ICONS+'lock.png';

        DISPLAY(PREMIUMNAME,'Paid');

    } else {
        
        PREMIUMICON.src=ICONS+'unlocked.png';

        DISPLAY(PREMIUMNAME,'Free');

    }

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
        
        if (localStorage.getItem('ModeColour')==='#5C829A') {

            STYLED(DETAILSDIV,'background','#5C829A');

            
        } else {
            
            STYLED(DETAILSDIV,'background','#212121');
            
        }


        if (element.MovieDetails) {

            

            STYLED(DETAILSDIV,'height','100%');
            
        } else {
           
            STYLED(DETAILSDIV,'height','0');

        }

    })

    const SELECTPLAYER=document.querySelector('.SelectPlayer');

    

}

export{MOVIESETUPPAGE}