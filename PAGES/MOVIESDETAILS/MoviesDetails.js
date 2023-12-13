import { MOVIESSETUPPAGE } from "../MOVIESSETUPPAGE/MoviesSetUpPage.js";

const MOVIESDETAILS=(DIV,element)=>{

    DIV.innerHTML=`

    <header>

        <img class='BackIcon' src='./IMAGES/Icons/back.png'/>
     
    </header>

    <div class='MoviesDetailsdiv'>${element.MovieDetails}</div>
    
    `;

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        MOVIESSETUPPAGE(DIV,element);

    })
}

export{MOVIESDETAILS}