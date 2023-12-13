import { MARATHONAPI, MOVIESPATH } from "../../APIS/MovielanderApi.js";
import { MOVIESSETUPPAGE } from "../MOVIESSETUPPAGE/MoviesSetUpPage.js";

const RECOMMENDEDMARATHONS=(DIV)=>{

    const ANIMATIONDIV=document.querySelector('#RecommendedMarathonsDiv');

    fetch(MARATHONAPI)

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

export{RECOMMENDEDMARATHONS}