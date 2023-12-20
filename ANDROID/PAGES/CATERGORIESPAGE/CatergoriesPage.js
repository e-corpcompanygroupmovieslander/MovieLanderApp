import { CATERGORIESPATH, CATERGORYAPI } from "../../../APIS/Api.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";

const ANDROIDCATERGORIES=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img class='LightModeIcon' src='${ICONS}list.png'/>

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

    ADVANCE.GETPACKAGE(CATERGORYAPI,'cors')

    .then((result) => {
        
        CLEAR(CATERGORIESSTORE);

        result.forEach(element => {

           const CATERGORIESHOLDER=document.createElement('div');
           CATERGORIESHOLDER.classList.add('CATERGORIESHOLDER');

           const CATERGORIESIMAGES=document.createElement('img');
           CATERGORIESIMAGES.classList.add('CATERGORIESIMAGES');
           CATERGORIESIMAGES.src=CATERGORIESPATH+element.Image;

           const CATERGORIESNAME=document.createElement('h1');
           CATERGORIESNAME.classList.add('CATERGORIESNAME');
           DISPLAY(CATERGORIESNAME,element.Sections)

           ADD(CATERGORIESHOLDER,CATERGORIESIMAGES);

           ADD(CATERGORIESHOLDER,CATERGORIESNAME);

           ADD(CATERGORIESSTORE,CATERGORIESHOLDER);

           const URL=element.link;

           CATERGORIESHOLDER.addEventListener('click',()=>{

            ADVANCE.ADDSTORAGE('local','MOVIEURL',URL);

            ADVANCE.ADDSTORAGE('local','SeeMoreNavigatore','Catergory');

            ANDROIDSEEMOREPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,URL)

           })

        });

    }).catch((err) => {
        console.log(err);
    });

}

export{ANDROIDCATERGORIES}