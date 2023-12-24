import { MOVIESAPI, MOVIESPATH } from "../../../APIS/Api.js"
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";

const ANDROIDRECOMMENDEDMOVIES=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const URL=MOVIESAPI;

    const ANIMATIONDIV=document.querySelector('#AndroidMoviesDiv');

    DISPLAY(ANIMATIONDIV,`

        <img class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    ADVANCE.GETPACKAGE(MOVIESAPI,'cors')

    .then((result) => {

        CLEAR(ANIMATIONDIV);

        ADVANCE.SHUFFLEDATA(result);
        
        result.forEach(element => {
            
            const RECOMMENDEDIMAGES=document.createElement('img');
            RECOMMENDEDIMAGES.src=MOVIESPATH+element.MovieImage;
            RECOMMENDEDIMAGES.classList.add('RecommendedImages');

            ADD(ANIMATIONDIV,RECOMMENDEDIMAGES);

            RECOMMENDEDIMAGES.addEventListener('click',()=>{

                ADVANCE.ADDSTORAGE('local','MovieId',element.MovieSource);

                ADVANCE.ADDSTORAGE('local','MOVIEURL',URL);

                MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

            })
        });

    }).catch((err) => {

        console.log(err);

    });

    const SEEMORE=document.querySelector('#MoviesSeeMore');

    SEEMORE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','SeeMoreNavigatore','Home');

        ADVANCE.ADDSTORAGE('local','MovieNavigation','SeeMore');

        ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL);

    })
    
}

export{ANDROIDRECOMMENDEDMOVIES}