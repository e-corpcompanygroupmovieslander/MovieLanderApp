import { ADVERTSAPI, ADVERTSPATH } from "../../APIS/MovielanderApi.js";

const ADVERTSPAGE=(DIV)=>{

    const ADVERTSDIV=document.querySelector('#AdvertsDiv');

    fetch(ADVERTSAPI)

    .then(res =>res.json())

    .then((result) => {

        result.forEach(element => {

            const ADVERTSIMAGE=document.createElement('img');

            ADVERTSIMAGE.src=ADVERTSPATH+element.ADVERTIMAGE;

            ADVERTSIMAGE.classList.add('AdvertsImage');

            ADVERTSDIV.append(ADVERTSIMAGE);
            
            //CLICK IMAGE

            ADVERTSIMAGE.addEventListener('click',()=>{

                open(element.ADVERTLINK);

            })
        });
        
    }).catch((err) => {

       console.log(err);

    });

}

export{ADVERTSPAGE}