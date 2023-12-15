import { ADVERTSPAGE } from "../ADVERSTPAGE/AdvertsPage.js";
import { RECOMMENDEDANIMATIONS } from "../RECOMMENDEDANIMATIONSPAGE/RecommendedAnimations.js";
import { USERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const HOMEPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='HomeDiv'>

        <div class='AdvertsDiv'></div>

        <div class='RecommendedDivs'>

            <div class='RecommendedHolder'>

                <h1 class='RecommendedHeaders'>Recommended Animations</h1>
            
                <h1 class='SeeMoreHeaders'>See More</h1>

            </div>

            <div id='RecommendedAnimationsDiv' class='MoviesHolder'></div>

        </div>
    
    </div>
    
    
    <footer>
    
        <img src='${ICONS}list.png'/>

        <img src='${ICONS}movies.png'/>

        <img class='ProfileIcon' src='${ICONS}profile.png'/>

    </footer>

    `);

    ADVERTSPAGE(ADVANCE,ADD);

    RECOMMENDEDANIMATIONS(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    const PROFILEICON=document.querySelector('.ProfileIcon');

    PROFILEICON.addEventListener('click',()=>{

        USERACCOUNTPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

}

export{HOMEPAGE}