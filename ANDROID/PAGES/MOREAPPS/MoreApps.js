import { ADVERTSPATH, MOREAPPSAPI } from "../../../APIS/Api.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDMOREAPPS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}app.png'/>

        </div>

        <div class='WishListDiv'></div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const UPDATESDIV=document.querySelector('.WishListDiv');

    DISPLAY(UPDATESDIV,`
    
    <img id='freeLoading' class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    fetch(MOREAPPSAPI)

    .then(res =>res.json())

    .then(data =>{

        UPDATESDIV.innerHTML='';

        ADVANCE.SHUFFLEDATA(data);

        data.forEach(element => {

            const MoviesDivHolder=document.createElement('div');
            MoviesDivHolder.classList.add('MoreAppsDivHolder');

            const CatergoryTitle=document.createElement('h1');
            CatergoryTitle.classList.add('MoreMoviesTitle');
            CatergoryTitle.innerHTML=element.APPNAME;

            const MOVIESIMAGE=document.createElement('img');
            MOVIESIMAGE.src=ADVERTSPATH+element.APPIMAGE;
            MOVIESIMAGE.classList.add('MoreAppsImage');

            MOVIESIMAGE.addEventListener('click',()=>{

                open(element.APPLINK);

            })

            MoviesDivHolder.append(MOVIESIMAGE);

            MoviesDivHolder.append(CatergoryTitle);

            UPDATESDIV.append(MoviesDivHolder);
           
        });

    })

    .catch(error=>console.log(error))

}

export{ANDROIDMOREAPPS}