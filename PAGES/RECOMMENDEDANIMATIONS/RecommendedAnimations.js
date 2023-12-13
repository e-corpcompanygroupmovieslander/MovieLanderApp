import { ANIMATIONAPI, MOVIESPATH } from "../../APIS/MovielanderApi.js";
import { MOVIESSETUPPAGE } from "../MOVIESSETUPPAGE/MoviesSetUpPage.js";

const RECOMMENDEDANIMATIONS=(DIV)=>{

    const ANIMATIONDIV=document.querySelector('#RecommendedAnimationsDiv');

    fetch(ANIMATIONAPI)

    .then(res =>res.json())

    .then((result) => {
        
        result.forEach(element => {
            console.log(element);

            const MOVIESIMAGE=document.createElement('img');

            MOVIESIMAGE.src=MOVIESPATH+element.MovieImage;

            MOVIESIMAGE.classList.add('MOVIESIMAGE')

            ANIMATIONDIV.append(MOVIESIMAGE);

            MOVIESIMAGE.addEventListener('click',()=>{

               MOVIESSETUPPAGE(DIV,element);

            })

        });

    }).catch((err) => {
        console.log(err)
    });


}

export{RECOMMENDEDANIMATIONS}