import { MOVIESPATH } from "../../../APIS/Api.js";
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDWISHLISTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}saved.png'/>

        </div>

        <div class='WishListDiv'></div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const parentalControlEnabled = localStorage.getItem('ParentalControlPin');

    const SeeMoreMoviesDiv=document.querySelector('.WishListDiv');

    const SAVEDDATA = localStorage.getItem('SavedMovies');

    // Check if there are any saved movies in local storage
    if (SAVEDDATA) {

        const savedMoviesArray = JSON.parse(SAVEDDATA);

        // Iterate over the saved movies
        savedMoviesArray.forEach(element => {
            
            const MoviesDivHolder=document.createElement('div');
            MoviesDivHolder.classList.add('CATERGORIESHOLDER');

            if (parentalControlEnabled && element.ParentalControl) {
                // Skip movies with parental control if parental control is enabled
                return;
            }

            const MOVIESIMAGE=document.createElement('img');
            MOVIESIMAGE.classList.add('RecommendedImage');

            MOVIESIMAGE.src=MOVIESPATH+element.MovieImage;

            
            MOVIESIMAGE.addEventListener('click',()=>{

                ADVANCE.ADDSTORAGE('local','MovieNavigation','SavedMovies');

                MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

            })

            MoviesDivHolder.append(MOVIESIMAGE);

            SeeMoreMoviesDiv.append(MoviesDivHolder);
    
        });
    } else {
        
        SeeMoreMoviesDiv.innerHTML=`
        
        <h1 class='NoMovies'>No Movies Saved</h1>

        `;

    }



}

export{ANDROIDWISHLISTPAGE}