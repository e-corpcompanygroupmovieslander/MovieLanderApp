import { ADVERTSPAGE } from "../ADVERTSPAGE/AdvertsPage.js";
import { RECOMMENDEDANIMATIONS } from "../RECOMMENDEDANIMATIONS/RecommendedAnimations.js";
import { RECOMMENDEDMARATHONS } from "../RECOMMENDEDMARATHONS/RecommendedMarathons.js";
import { RECOMMENDEDMOVIES } from "../RECOMMENDEDMOVIES/RecommendedMovies.js";
import { RECOMMENDEDSERIES } from "../RECOMMENDEDSERIES/RecommendedSeries.js";
import { USERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=`
    
    <div class='HomeDiv'>

        <div id='AdvertsDiv' class='HomeDivs'></div>

        <div class='RecommendedDiv'>

            <div class='SectionHolders'>

            <h1 class='RecommendedHeaders'>Recommended Animations</h1>

            <h1 class='SeeMoreHeaders'>See More</h1>
            
            </div>

            <div id='RecommendedAnimationsDiv' class='MoviesHolder'></div>

        </div>

        <div class='RecommendedDiv'>

            <div class='SectionHolders'>

                <h1 class='RecommendedHeaders'>Recommended Movies</h1>

                <h1 class='SeeMoreHeaders'>See More</h1>
            
            </div>

            <div id='RecommendedMoviesDiv' class='MoviesHolder'></div>

        </div>

        <div class='RecommendedDiv'>

            <div class='SectionHolders'>

                <h1 class='RecommendedHeaders'>Recommended Marathons</h1>

                <h1 class='SeeMoreHeaders'>See More</h1>
            
            </div>

            <div id='RecommendedMarathonsDiv' class='MoviesHolder'></div>

        </div>

        <div class='RecommendedDiv'>

            <div class='SectionHolders'>

                <h1 class='RecommendedHeaders'>Recommended Series</h1>

                <h1 class='SeeMoreHeaders'>See More</h1>
            
            </div>

            <div id='RecommendedSeriesDiv' class='MoviesHolder'></div>

        </div>
    
    </div>

    <footer>
    
        <img src='./IMAGES/Icons/list.png'/>

        <img src='./IMAGES/Icons/movies.png'/>

        <img id='UserAccountIcon' src='./IMAGES/Icons/profile.png'/>

    </footer>

    `;

    //START UP FUNCTIONS
    ADVERTSPAGE(DIV);

    RECOMMENDEDANIMATIONS(DIV);

    RECOMMENDEDMOVIES(DIV);

    RECOMMENDEDMARATHONS(DIV);

    RECOMMENDEDSERIES(DIV);

    const UserAccountIcon=document.querySelector('#UserAccountIcon');

    UserAccountIcon.addEventListener('click',()=>{

        USERACCOUNTPAGE(DIV);

    })

}

export{HOMEPAGE}