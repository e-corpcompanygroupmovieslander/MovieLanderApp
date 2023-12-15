import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const USERACCOUNTPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <header>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <img class='SaveIcon' src='${ICONS}sun.png'/>

    </header>

    <div class='UserDetails'>

        <div class='UserHolderDetails'></div>

        <button>Premium</button>

        <button>Commnunity</button>

        <button>Wish List</button>

        <button>Settings</button>

        <button>Contact Us</button>

        <button>More Apps</button>

    
    </div>
    
    
    `);

    const BackIcon=document.querySelector('.BackIcon');

    BackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

}

export{USERACCOUNTPAGE}