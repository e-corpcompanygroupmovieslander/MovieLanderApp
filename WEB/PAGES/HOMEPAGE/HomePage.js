import { ANIMATIONAPI, MOVIESPATH } from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";

const WEBHOMEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='DesktopHeader'>

    <h1 class='WebAppName'>Movie Lander</h1>

    <img  class='LightMode' class='LightMode' src='${ICONS}sun.png'/>

    <img  class='DarkMode' class='LightMode' src='${ICONS}moon.png'/>

    </div>

    <div class='WebMoviesDiv'></div>
    
    <div class='DesktopHeader'>

        <h1 class='WebHolders' >Catergories</h1>

        <h1 class='WebHolders'>My Account</h1>

        <h1 class='WebHolders'>Settings</h1>

    </div>
    
    `);

    const LightMode=document.querySelector('.LightMode');

    const DarkMode=document.querySelector('.DarkMode');

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(LightMode,'display','none');

        STYLED(DarkMode,'display','inline-flex');
        
    } else {
        
        STYLED(LightMode,'display','none');

        STYLED(DarkMode,'display','inline-flex');

    }

    LightMode.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

        DIV.style.background='#212121';

        LightMode.style.display='none';

        DarkMode.style.display='block';

    })

    DarkMode.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','ModeColour','#5C829A');

        DIV.style.background='#5C829A';

        LightMode.style.display='block';

        DarkMode.style.display='none';
    })

    const WebMoviesDiv=document.querySelector('.WebMoviesDiv');

    ADVANCE.GETPACKAGE(ANIMATIONAPI,'cors')

    .then((result) => {

        CLEAR(WebMoviesDiv);

        ADVANCE.SHUFFLEDATA(result);
        
        result.forEach(element => {

            const RECOMMENDEDIMAGES=document.createElement('img');
            RECOMMENDEDIMAGES.src=MOVIESPATH+element.MovieImage;
            RECOMMENDEDIMAGES.classList.add('MoviesImages');

            ADD(WebMoviesDiv,RECOMMENDEDIMAGES);

            RECOMMENDEDIMAGES.addEventListener('click',()=>{

                ADVANCE.ADDSTORAGE('local','MovieId',element.MovieSource);
                
                ADVANCE.ADDSTORAGE('local','MOVIEURL',URL);

                ADVANCE.ADDSTORAGE('local','MovieNavigation','Direct');

            })
        });

    }).catch((err) => {

        console.log(err);

    });

   

}

export{WEBHOMEPAGE}