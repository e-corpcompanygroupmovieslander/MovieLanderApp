import { ADD, CONDITION, DISPLAY, STYLED } from "../../CONNECTION/Connection.js";

//CREATE A TEXT
const TEXT = (ELEMENT,TYPE, LABEL,CLASS,onClick = null) => {
    
    const holder = document.createElement(TYPE || 'p'); 
    
    //STYLES
    STYLED(holder, 'position', 'relative');
    STYLED(holder, 'textAlign', 'center');

    if (TYPE === 'h1') {

        STYLED(holder, 'fontSize', '30px');

    } else if (TYPE === 'h2') {

        STYLED(holder, 'fontSize', '25px');

    } else if (TYPE === 'h3') {

        STYLED(holder, 'fontSize', '20px');

    } else {

        STYLED(holder, 'fontSize', '18px');

    }

    //ADD TEXT TO IT
    DISPLAY(holder,LABEL);

    if (CLASS) {

        holder.classList.add(CLASS);

    }

    if (onClick) {

        holder.addEventListener('click', onClick);

    }

    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,holder),
        ()=>ADD('',holder)
    )

};

export{TEXT}