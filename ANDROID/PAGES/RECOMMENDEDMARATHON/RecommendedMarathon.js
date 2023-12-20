import { MARATHONAPI, MOVIESPATH } from "../../../APIS/Api.js"
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";

const ANDROIDRECOMMENDEDMARATHONS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const URL=MARATHONAPI;

    const ANIMATIONDIV=document.querySelector('#AndroidMarathonsDiv');

    DISPLAY(ANIMATIONDIV,`

        <img class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    ADVANCE.GETPACKAGE(MARATHONAPI,'cors')

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

                ADVANCE.ADDSTORAGE('local','MOVIEURL',URL);

                MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

            })
        });

    }).catch((err) => {

        console.log(err);

    });
    
    const SEEMORE=document.querySelector('#MarathonsSeeMore');

    SEEMORE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','SeeMoreNavigatore','Home');

        ADVANCE.ADDSTORAGE('local','MovieNavigation','SeeMore');

        ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL);

    })

}

export{ANDROIDRECOMMENDEDMARATHONS}