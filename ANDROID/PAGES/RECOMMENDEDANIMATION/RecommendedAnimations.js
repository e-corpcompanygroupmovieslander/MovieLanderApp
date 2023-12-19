import { ANIMATIONAPI, MOVIESPATH } from "../../../APIS/Api.js"
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";

const ANDROIDRECOMMENDEDANIMATION=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

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

export{ANDROIDRECOMMENDEDANIMATION}