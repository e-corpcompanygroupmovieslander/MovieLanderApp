import { ADVERTSLINK, ADVERTSPATH } from "../../APIS/Api.js";

const ADVERTSPAGE=(ADVANCE,ADD)=>{

    const ADVERTSPAGEDIV=document.querySelector('.AdvertsDiv');

    ADVANCE.GETPACKAGE(ADVERTSLINK,'cors')

    .then((result) => {
        
        result.forEach(element => {
            
            const ADVERSTIMAGES=document.createElement('img');
            ADVERSTIMAGES.src=ADVERTSPATH+element.ADVERTIMAGE;
            ADVERSTIMAGES.classList.add('AdvertsImages');

            ADD(ADVERTSPAGEDIV,ADVERSTIMAGES)

            ADVERSTIMAGES.addEventListener('click',()=>{

                open(element.ADVERTLINK);

            })

        });

    }).catch((err) => {
        console.log(err)
    });

}

export{ADVERTSPAGE}