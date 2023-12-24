import { ANIMATIONAPI, MOVIESPATH } from "../../../APIS/Api.js"
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";

const ANDROIDRECOMMENDEDANIMATION=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const URL=ANIMATIONAPI;

    const ANIMATIONDIV=document.querySelector('#AndroidAnimationsDiv');

    DISPLAY(ANIMATIONDIV,`

        <img class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    ADVANCE.GETPACKAGE(ANIMATIONAPI,'cors')

    .then((result) => {

        CLEAR(ANIMATIONDIV);

        ADVANCE.SHUFFLEDATA(result);
        
        result.forEach(element => {

            //console.log(result);
            
            const RECOMMENDEDIMAGES=document.createElement('img');
            RECOMMENDEDIMAGES.src=MOVIESPATH+element.MovieImage;
            RECOMMENDEDIMAGES.classList.add('RecommendedImages');

            ADD(ANIMATIONDIV,RECOMMENDEDIMAGES);

            RECOMMENDEDIMAGES.addEventListener('click',()=>{

                ADVANCE.ADDSTORAGE('local','MovieId',element.MovieSource);
                
                ADVANCE.ADDSTORAGE('local','MOVIEURL',URL);

                ADVANCE.ADDSTORAGE('local','MovieNavigation','Direct');

                MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

            })
        });

    }).catch((err) => {

        console.log(err);

    });

    const SEEMORE=document.querySelector('#AnimationSeeMore');

    SEEMORE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','MovieNavigation','SeeMore');

        ADVANCE.ADDSTORAGE('local','SeeMoreNavigatore','Home');

        ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL);

    })
    
}

export{ANDROIDRECOMMENDEDANIMATION}