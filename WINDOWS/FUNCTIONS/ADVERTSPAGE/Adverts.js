import { ADVERTSAPI, ADVERTSPATH } from "../../../APIS/Api.js"

const WINDOWSADVERST=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const ADVERTSDIV=document.querySelector('.WindowsDataDiv');

    ADVERTSDIV.innerHTML=`
    
    <img id='freeLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `;

    fetch(ADVERTSAPI)

    .then(res=>res.json())

    .then((result) => {

        ADVERTSDIV.innerHTML=``;
        
        result.forEach(element => {

            const ADVERTSDIVHOLDER=document.createElement('div');

            ADVERTSDIVHOLDER.classList.add('ADVERTSDIVHOLDER');

            //IMAGES
            const ADVERTSIMAGES=document.createElement('img');
            ADVERTSIMAGES.src=ADVERTSPATH+element.ADVERTIMAGE;
            ADVERTSIMAGES.classList.add('AdvertsImage');

            ADVERTSDIVHOLDER.append(ADVERTSIMAGES);

            ADVERTSDIV.append(ADVERTSDIVHOLDER);

            
            ADVERTSIMAGES.addEventListener('click',()=>{

                open(element.ADVERTLINK);

            })
            
        });

    }).catch((err) => {
        console.log(err)
    });







}

export{WINDOWSADVERST}