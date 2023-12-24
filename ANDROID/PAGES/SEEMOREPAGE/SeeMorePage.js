import { MOVIESPATH } from "../../../APIS/Api.js";
import { ANDROIDCATERGORIES } from "../CATERGORIESPAGE/CatergoriesPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";

const ANDROIDSEEMOREPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL)=>{

    ADVANCE.ADDSTORAGE('local','MOVIEURL',URL);

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

    </div>

    <div class='CatergoriesStore'></div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        if (localStorage.getItem('SeeMoreNavigatore')==='Catergory') {
            
            ANDROIDCATERGORIES(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

        } else {
        
            ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

        }

    });

    const CATERGORIESSTORE=document.querySelector('.CatergoriesStore');

    DISPLAY(CATERGORIESSTORE,`

        <img id='CatergoriesLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `);

    ADVANCE.GETPACKAGE(URL,'cors')

    .then((result) => {
        
        CLEAR(CATERGORIESSTORE);

        ADVANCE.SHUFFLEDATA(result);

        result.forEach(element => {

            const parentalControlEnabled = localStorage.getItem('ParentalControlPin');

            //console.log(result);
            if (parentalControlEnabled && element.ParentalControl) {
                // Skip movies with parental control if parental control is enabled
                return;
            }
 
           const CATERGORIESHOLDER=document.createElement('div');
           CATERGORIESHOLDER.classList.add('CATERGORIESHOLDER');

           const CATERGORIESIMAGES=document.createElement('img');
           CATERGORIESIMAGES.classList.add('RecommendedImage');
           CATERGORIESIMAGES.src=MOVIESPATH+element.MovieImage;


           ADD(CATERGORIESHOLDER,CATERGORIESIMAGES);

           ADD(CATERGORIESSTORE,CATERGORIESHOLDER);

           CATERGORIESIMAGES.addEventListener('click',()=>{

            ADVANCE.ADDSTORAGE('local','MovieId',element.MovieSource);

            MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

           })

        });

    }).catch((err) => {

        console.log(err);

    });

}

export{ANDROIDSEEMOREPAGE}