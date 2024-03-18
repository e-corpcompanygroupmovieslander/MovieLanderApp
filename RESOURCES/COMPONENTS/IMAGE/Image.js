import { ADD, CONDITION, STYLED } from "../../CONNECTION/Connection.js";

//CREATE A IMAGE
const IMAGE = (ELEMENT,PATH,CLASS,onClick = null) => {

    const Image = document.createElement('img');
    
    if (CLASS) {

        Image.classList.add(CLASS);

    }

    //STYLES
    STYLED(Image,'position','relative');
    STYLED(Image,'width','97%');
    STYLED(Image,'height','95%');
    STYLED(Image,'left','2%');
    STYLED(Image,'borderRadius','10px');
    STYLED(Image,'outline','none');
    STYLED(Image,'border','none');
    STYLED(Image,'marginTop','0.5rem');
    STYLED(Image,'marginBottom','0.5rem');

    if (onClick) {

        Image.addEventListener('click', onClick);

    }
    
    Image.src = PATH;

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,Image),
        ()=>ADD('',Image)
    )
   
}

export{IMAGE}