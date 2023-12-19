import { MOVIESPATH } from "../../../APIS/Api.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";

const ANDROIDSEEMOREPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

    </div>

    <div class='CatergoriesStore'></div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const CATERGORIESSTORE=document.querySelector('.CatergoriesStore');

    DISPLAY(CATERGORIESSTORE,`

        <img id='CatergoriesLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `);

    ADVANCE.GETPACKAGE(URL,'cors')

    .then((result) => {
        
        CLEAR(CATERGORIESSTORE);

        result.forEach(element => {
 
           const CATERGORIESHOLDER=document.createElement('div');
           CATERGORIESHOLDER.classList.add('CATERGORIESHOLDER');

           const CATERGORIESIMAGES=document.createElement('img');
           CATERGORIESIMAGES.classList.add('RecommendedImage');
           CATERGORIESIMAGES.src=MOVIESPATH+element.MovieImage;


           ADD(CATERGORIESHOLDER,CATERGORIESIMAGES);

           ADD(CATERGORIESSTORE,CATERGORIESHOLDER);

           CATERGORIESIMAGES.addEventListener('click',()=>{

            MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

           })

        });

    }).catch((err) => {

        console.log(err);
        
    });

}

export{ANDROIDSEEMOREPAGE}