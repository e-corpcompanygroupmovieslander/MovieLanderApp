import { SERIESAPI, MOVIESPATH } from "../../APIS/MovielanderApi.js";
import { MOVIESSETUPPAGE } from "../MOVIESSETUPPAGE/MoviesSetUpPage.js";

const RECOMMENDEDSERIES=(DIV)=>{

    const ANIMATIONDIV=document.querySelector('#RecommendedSeriesDiv');

    fetch(SERIESAPI)

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

export{RECOMMENDEDSERIES}