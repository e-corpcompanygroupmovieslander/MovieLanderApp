import { MOVIESPATH } from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDPREMIUMPAYMENT } from "../ANDROIDPREMIUMPAYMENT/AndroidPremiumPayment.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { PLAYTHEMOVIE } from "../PLAYTHEMOVIE/PlayTheMovie.js";
import { ANDROIDREVIEWMOVIES } from "../REVIEWMOVIE/ReviewMovies.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";
import { ANDROIDWISHLISTPAGE } from "../WISHLISTPAGE/WishListPage.js";
import { ANDROIDCOMMENTDIV } from "./CommentDiv.js";


const MOVIESETUPPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)=>{

    if (localStorage.getItem('Device')==='Android') {

        if (element.PosterColour) {
          
            StatusBar.backgroundColorByHexString(element.PosterColour);
            
        } else {
            
            StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
        }
  
    } else {
       
        console.log('Android Version Changed Colour');
        
    }
    
    localStorage.setItem('Element',JSON.stringify(element))

    CLEAR(DIV);

    DISPLAY(DIV,`

        <img class='BackgroundImage' src='${MOVIESPATH+element.MovieImage}'/>

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img id='SAVEMODE' class='LightModeIcon' src=''/>

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

            <img  class='ReviewMovies' src='${ICONS}review.png'/>

            <img class='DetailsIcon' src='${ICONS}library.png'/>

            <img id='MenuIcon' class='Comments' src='${ICONS}menu.png'/>
        
        </div>

        <div class='DetailsDiv'>

            ${element.MovieDetails}

            <img class='CloseIcon' src='${ICONS}close.png'/>

        </div>
    
    `);

    const SaveMovieIcon = document.querySelector('#SAVEMODE');

    // Retrieve existing saved movies from localStorage
    let SAVEDMOVIES = JSON.parse(localStorage.getItem('SavedMovies')) || [];

    const isMovieSaved = SAVEDMOVIES.some(savedMovie => savedMovie.MovieName === element.MovieName);

        if (isMovieSaved) {
            // If the movie is already saved, remove it from the array
            SAVEDMOVIES = SAVEDMOVIES.filter(savedMovie => savedMovie.MovieName !== element.MovieName);

            SaveMovieIcon.src = `${ICONS}saved.png`;

        } else {
        
            SaveMovieIcon.src = `${ICONS}save.png`;
        }

    SaveMovieIcon.addEventListener('click',()=>{

    // Retrieve existing saved movies from localStorage
    let SAVEMOVIES = JSON.parse(localStorage.getItem('SavedMovies')) || [];

    const isMovieSaved = SAVEMOVIES.some(savedMovie => savedMovie.MovieName === element.MovieName);

        if (isMovieSaved) {
            // If the movie is already saved, remove it from the array
            SAVEMOVIES = SAVEMOVIES.filter(savedMovie => savedMovie.MovieName !== element.MovieName);

            // Save the updated array back to localStorage
            localStorage.setItem('SavedMovies', JSON.stringify(SAVEMOVIES));

            SaveMovieIcon.src = `${ICONS}save.png`;
        } else {
            // Add the new element to the array
            SAVEMOVIES.push(element);

            // Save the updated array back to localStorage
            localStorage.setItem('SavedMovies', JSON.stringify(SAVEMOVIES));

            SaveMovieIcon.src = `${ICONS}saved.png`;
        }

    })

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

        if (localStorage.getItem('Device')==='Android') {

            StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
            
        } else {
           
            console.log('Android Version Changed Colour');
            
        }

        if (localStorage.getItem('MovieNavigation')==='Direct') {
           
            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        } else {

            
            if (localStorage.getItem('MovieNavigation')==='SavedMovies') {
                
                ANDROIDWISHLISTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

            } else {
               
                const URL=localStorage.getItem('MOVIEURL')
            
                ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL);
                
            }

            
        }

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

    const PLAYBUTTON=document.querySelector('.WatchMovieButton');

    PLAYBUTTON.addEventListener('click',()=>{

        
        if (element.Subscription && localStorage.getItem('Premium')) {
            
            PLAYTHEMOVIE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);
 
        } else {

            if (element.Subscription && !localStorage.getItem('Premium')) {
               
                localStorage.setItem('PayPremium','NotDirect');

                ANDROIDPREMIUMPAYMENT(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
                
            } else {
                
                PLAYTHEMOVIE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

            }
            
        }

    })

    const COMMENTICON=document.querySelector('.Comments');

    COMMENTICON.addEventListener('click',()=>{

        ANDROIDCOMMENTDIV(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

    })

    const REVIEWICONS=document.querySelector('.ReviewMovies');

    REVIEWICONS.addEventListener('click',()=>{

        ANDROIDREVIEWMOVIES(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

    })


}

export{MOVIESETUPPAGE}