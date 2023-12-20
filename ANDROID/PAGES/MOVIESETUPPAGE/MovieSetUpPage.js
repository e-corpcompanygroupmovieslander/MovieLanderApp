import { MOVIESPATH } from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { PLAYTHEMOVIE } from "../PLAYTHEMOVIE/PlayTheMovie.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";


const MOVIESETUPPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <img class='BackgroundImage' src='${MOVIESPATH+element.MovieImage}'/>

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

        <div class='PremiumMessage'>

            <h1 class='PremiumMessager'>Pay For Premium</h1>
        
        </div>
    
    `);

    if (localStorage.getItem('Device')==='Android') {

        if (element.PosterColour) {
          
            StatusBar.backgroundColorByHexString(element.PosterColour);
            
        } else {
            
            StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
        }
  
    } else {
       
        console.log('Android Version Changed Colour');
        
    }

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

            ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

            StatusBar.backgroundColorByHexString('#212121');
            
        } else {
           
            console.log('Android Version Changed Colour');
            
        }

        if (localStorage.getItem('MovieNavigation')==='Direct') {
           
            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        } else {

            const URL=localStorage.getItem('MOVIEURL')
            
            ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL);
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

    const PREMIUMMESSAGE=document.querySelector('.PremiumMessage');

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(PREMIUMMESSAGE,'background','#5C829A');
 
    } else {
        
        STYLED(PREMIUMMESSAGE,'background','#212121');
        
    }

    PLAYBUTTON.addEventListener('click',()=>{

        
        if (element.Subscription && localStorage.getItem('Premium')) {
            
            PLAYTHEMOVIE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);
 
        } else {

            if (element.Subscription && !localStorage.getItem('Premium')) {
               
                STYLED(PREMIUMMESSAGE,'display','inline-flex');
                STYLED(PREMIUMMESSAGE,'height','50px');

                setTimeout(() => {
                    
                    STYLED(PREMIUMMESSAGE,'display','none');

                    STYLED(PREMIUMMESSAGE,'height','0px');

                }, 2000);
                
            } else {
                
                PLAYTHEMOVIE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

            }
            
        }

    })

}

export{MOVIESETUPPAGE}