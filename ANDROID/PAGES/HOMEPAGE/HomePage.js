import { ANDROIDADVERTSPAGE } from "../ADVERTSPAGE/AdvertsPage.js";
import { ANDROIDCATERGORIES } from "../CATERGORIESPAGE/CatergoriesPage.js";
import { ANDROIDFREEWATCHPAGE } from "../FREEWATCHPAGE/FreeWatchPage.js";
import { ANDROIDRECOMMENDEDANIMATION} from "../RECOMMENDEDANIMATION/RecommendedAnimations.js";
import { ANDROIDRECOMMENDEDMARATHONS } from "../RECOMMENDEDMARATHON/RecommendedMarathon.js";
import { ANDROIDRECOMMENDEDMOVIES } from "../RECOMMENDEDMOVIES/RecommendedMovies.js";
import { ANDROIDRECOMMENDEDSERIES } from "../RECOMMENDEDSERIES/RecommendedSeries.js";
import { ANDROIDUSERACCOUNTPAGE} from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDHOMEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHomeDiv'>

        <div class='AndroidAdvertsDiv'></div>

        <div class='RecommendedSectionDiv'>

            <div class='SectionHolder'>

                <h1 class='RecommendedHolder'>Recommended Animations</h1>
            
                <h1 id='AnimationSeeMore' class='SeeMore'>SeeMore</h1>

            </div>

            <div id='AndroidAnimationsDiv' class='RecommendedHoldersSections'></div>
        
        </div>

        <div class='RecommendedSectionDiv'>

            <div class='SectionHolder'>

                <h1 class='RecommendedHolder'>Recommended Movies</h1>
            
                <h1 id='MoviesSeeMore' class='SeeMore'>SeeMore</h1>

            </div>

            <div id='AndroidMoviesDiv' class='RecommendedHoldersSections'></div>
        
        </div>

        <div class='RecommendedSectionDiv'>

            <div class='SectionHolder'>

                <h1 class='RecommendedHolder'>Recommended Marathons</h1>
            
                <h1 id='MarathonsSeeMore' class='SeeMore'>SeeMore</h1>

            </div>

            <div id='AndroidMarathonsDiv' class='RecommendedHoldersSections'></div>
        
        </div>

        <div class='RecommendedSectionDiv'>

            <div class='SectionHolder'>

                <h1 class='RecommendedHolder'>Recommended Series</h1>
            
                <h1 id='SeriesSeeMore' class='SeeMore'>SeeMore</h1>

            </div>

            <div id='AndroidSeriesDiv' class='RecommendedHoldersSections'></div>
        
        </div>
    
    </div>
    
    <div class='AndroidFooter'>

        <img class='CatergoriesIcon' src='${ICONS}list.png'/>

        <img class='FreeWatchIcons' src='${ICONS}movies.png'/>

        <img class='ProfileIcon' src='${ICONS}profile.png'/>
    
    </div>

    `);

            
    const CATERGORIESICON=document.querySelector('.CatergoriesIcon');

    CATERGORIESICON.addEventListener('click',()=>{

        ANDROIDCATERGORIES(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const PROFILEICON=document.querySelector('.ProfileIcon');

    PROFILEICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    ANDROIDADVERTSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    ANDROIDRECOMMENDEDANIMATION(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    ANDROIDRECOMMENDEDMOVIES(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    ANDROIDRECOMMENDEDMARATHONS(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    ANDROIDRECOMMENDEDSERIES(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    
    const Main=document.querySelector('.AndroidHomeDiv');

    const RoundFooter=document.querySelector('.AndroidFooter')

    let prevScrollPos = Main.scrollTop;

    Main.addEventListener('scroll', () => {

        const currentScrollPos = Main.scrollTop;

        if (currentScrollPos > prevScrollPos) {
            // Scrolling down, hide the footer
            RoundFooter.style.display = 'none';
        } else {
            // Scrolling up, show the footer
            RoundFooter.style.display = 'inline-flex';
        }

        prevScrollPos = currentScrollPos;

    });

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        RoundFooter.style.background='#5C829A';
     
    
    } else {
        
        RoundFooter.style.background='#00000080';
    
    }

    const FREEWATCHICON=document.querySelector('.FreeWatchIcons');

    FREEWATCHICON.addEventListener('click',()=>{

        ANDROIDFREEWATCHPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    

}

export{ANDROIDHOMEPAGE}