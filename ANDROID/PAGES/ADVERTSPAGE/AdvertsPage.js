import { ADVERTSAPI, ADVERTSPATH } from "../../../APIS/Api.js"

const ANDROIDADVERTSPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const ADVERTSDIV=document.querySelector('.AndroidAdvertsDiv');

    DISPLAY(ADVERTSDIV,`
    
    <img class='LoadingIcon' src='${ICONS}loading.png'/>

    `)

    ADVANCE.GETPACKAGE(ADVERTSAPI,'cors')

    .then((result) => {

        CLEAR(ADVERTSDIV);

        ADVANCE.SHUFFLEDATA(result);
        
        result.forEach(element => {
    
            const ADVERSTIMAGE=document.createElement('img');
            ADVERSTIMAGE.classList.add('AdvertsImage');
            ADVERSTIMAGE.src=ADVERTSPATH+element.ADVERTIMAGE;

            ADD(ADVERTSDIV,ADVERSTIMAGE);

            ADVERSTIMAGE.addEventListener('click',()=>{

                open(element.ADVERTLINK);

            })

        });
        
    }).catch((err) => {
        console.log(err)
    });

}

export{ANDROIDADVERTSPAGE}