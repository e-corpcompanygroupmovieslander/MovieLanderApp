import { ANDROIDFREEWATCHPAGE } from "./FreeWatchPage.js";

const ANDROIDFREEPLAYER=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <iframe class='MoviePlayer' src="https://www.youtube-nocookie.com/embed/${element.MoveTrailer}?autoplay=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen"></iframe>
        
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

        </div>

    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDFREEWATCHPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

    });

}

export{ANDROIDFREEPLAYER}