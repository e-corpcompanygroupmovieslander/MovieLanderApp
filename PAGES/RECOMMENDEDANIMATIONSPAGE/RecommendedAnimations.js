import { ANIMATIONLINK, MOVIESPATH } from "../../APIS/Api.js";
import { MOVIESDISPLAY } from "../MOVIESDISPLAYPAGE/MoviesDisplayPage.js";

const RECOMMENDEDANIMATIONS=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    const ADVERTSPAGEDIV=document.querySelector('#RecommendedAnimationsDiv');

    ADVANCE.GETPACKAGE(ANIMATIONLINK,'cors')

    .then((result) => {
        
        result.forEach(element => {

            console.log(element)
            
            const ADVERSTIMAGES=document.createElement('img');
            ADVERSTIMAGES.src=MOVIESPATH+element.MovieImage;
            ADVERSTIMAGES.classList.add('MoviesImages');

            ADD(ADVERTSPAGEDIV,ADVERSTIMAGES)

            ADVERSTIMAGES.addEventListener('click',()=>{

                MOVIESDISPLAY(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS,element);

            })

        });

    }).catch((err) => {
        console.log(err)
    });




}

export{RECOMMENDEDANIMATIONS}