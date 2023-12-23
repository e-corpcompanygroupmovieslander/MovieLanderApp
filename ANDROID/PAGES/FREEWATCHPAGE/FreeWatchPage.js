import { FREEMOVIESAPI, MOVIESPATH } from "../../../APIS/Api.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDFREEPLAYER } from "./FreeWatchDiv.js";

const ANDROIDFREEWATCHPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
    
    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img class='LightModeIcon' src='${ICONS}movies.png'/>

    </div>

   <div class='FreeMoviesDiv'></div>

    

    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const FREEWATCHDIV=document.querySelector('.FreeMoviesDiv');

    DISPLAY(FREEWATCHDIV,`

        <img id='freeLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `)

    fetch(FREEMOVIESAPI)

    .then(res=>res.json())

    .then((result) => {
        
        CLEAR(FREEWATCHDIV);

        ADVANCE.SHUFFLEDATA(result);

        result.forEach(element => {
           
            const CATERGORIESHOLDER=document.createElement('div');
            CATERGORIESHOLDER.classList.add('CATERGORIESHOLDER');
 
            const CATERGORIESIMAGES=document.createElement('img');
            CATERGORIESIMAGES.classList.add('RecommendedImage');
            CATERGORIESIMAGES.src=MOVIESPATH+element.MovieImage;
 
 
            ADD(CATERGORIESHOLDER,CATERGORIESIMAGES);
 
            ADD(FREEWATCHDIV,CATERGORIESHOLDER);
 
            CATERGORIESIMAGES.addEventListener('click',()=>{
 
             ANDROIDFREEPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);
 
            })

        });

    }).catch((err) => {
        console.log(err)
    });
    
}

export{ANDROIDFREEWATCHPAGE}