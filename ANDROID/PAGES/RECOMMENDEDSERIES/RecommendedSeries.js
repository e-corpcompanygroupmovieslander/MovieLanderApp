import { SERIESAPI, MOVIESPATH } from "../../../APIS/Api.js"
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";

const ANDROIDRECOMMENDEDSERIES=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const ANIMATIONDIV=document.querySelector('#AndroidSeriesDiv');

    DISPLAY(ANIMATIONDIV,`

        <img class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    ADVANCE.GETPACKAGE(SERIESAPI,'cors')

    .then((result) => {

        CLEAR(ANIMATIONDIV);

        ADVANCE.SHUFFLEDATA(result);
        
        result.forEach(element => {
            
            const RECOMMENDEDIMAGES=document.createElement('img');
            RECOMMENDEDIMAGES.src=MOVIESPATH+element.MovieImage;
            RECOMMENDEDIMAGES.classList.add('RecommendedImages')

            ADD(ANIMATIONDIV,RECOMMENDEDIMAGES);

            RECOMMENDEDIMAGES.addEventListener('click',()=>{

                MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)

            })
        });

    }).catch((err) => {

        console.log(err);

    });

    const URL=SERIESAPI;

    const SEEMORE=document.querySelector('#SeriesSeeMore');

    SEEMORE.addEventListener('click',()=>{

        ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL);

    })
    
}

export{ANDROIDRECOMMENDEDSERIES}