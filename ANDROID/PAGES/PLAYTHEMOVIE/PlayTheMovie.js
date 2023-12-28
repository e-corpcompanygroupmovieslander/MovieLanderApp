import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";

const PLAYTHEMOVIE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)=>{


    if (localStorage.getItem('AppPlayer')==='Drive') {
            
        open(`https://drive.google.com/uc?export=download&id=${element.MovieSource}`);

    } else {
        
        CLEAR(DIV)

        DISPLAY(DIV,`

        <iframe class='MoviePlayer' src="https://drive.google.com/file/d/${element.MovieSource}/preview" width="640" height="480" allow="autoplay"></iframe>
        
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

        </div>

        `);

        const BACKICON=document.querySelector('.BackIcon');

        BACKICON.addEventListener('click',()=>{
    
            MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);
    
        });

        


    }



}

export{PLAYTHEMOVIE}