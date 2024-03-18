//APPENDING DATA TO ELEMENT
const ADD=(ELEMENT,ELEMENT1)=>{

    if (ELEMENT) {

        ELEMENT.append(ELEMENT1); 

    } else {
        
        document.body.append(ELEMENT1);

    }
    
}

export{ADD}