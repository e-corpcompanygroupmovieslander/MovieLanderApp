import { MOVIESAPI, MOVIESPATH } from "../../../APIS/Api.js"
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";

const ANDROIDRECOMMENDEDMOVIES=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const ANIMATIONDIV=document.querySelector('#AndroidMoviesDiv');

    DISPLAY(ANIMATIONDIV,`

        <img class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    ADVANCE.GETPACKAGE(MOVIESAPI,'cors')

    .then((result) => {

        CLEAR(ANIMATIONDIV);

        ADVANCE.SHUFFLEDATA(result);
        
        result.forEach(element => {

            //console.log(result);
            
            const RECOMMENDEDIMAGES=document.createElement('img');
            RECOMMENDEDIMAGES.src=MOVIESPATH+element.MovieImage;
            RECOMMENDEDIMAGES.classList.add('RecommendedImages')

            ADD(ANIMATIONDIV,RECOMMENDEDIMAGES);

            RECOMMENDEDIMAGES.addEventListener('click',()=>{

                MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)

            })
        });

    }).catch((err) => {
        console.log(err)
    });
    

}

export{ANDROIDRECOMMENDEDMOVIES}