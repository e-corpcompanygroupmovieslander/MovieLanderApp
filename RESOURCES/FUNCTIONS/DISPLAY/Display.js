//DISPLAY DATA ON PAGE
const DISPLAY=(ELEMENT,ELEMENT1)=>{

    if (ELEMENT) {

        ELEMENT.innerHTML=ELEMENT1; 

    } else {
        
        document.body.innerHTML=ELEMENT1;

    }

}

export{DISPLAY}