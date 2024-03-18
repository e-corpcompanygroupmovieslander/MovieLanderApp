import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { CONDITION } from "../../FUNCTIONS/CONDITION/Condition.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//CREATE ICON
const ICONS = (ELEMENT,PATH,CLASS,onClick = null) => {

    const icon = document.createElement('img');

    if (CLASS) {

        icon.classList.add(CLASS); 

    }

    //STYLES
    STYLED(icon,'position','relative');
    STYLED(icon,'width','25px');
    STYLED(icon,'height','25px');
    STYLED(icon,'padding','5px');
    STYLED(icon,'objectFit','cover');
    STYLED(icon,'outline','none');
    STYLED(icon,'marginTop','auto');
    STYLED(icon,'marginBottom','auto');
    STYLED(icon,'marginLeft','auto');
    STYLED(icon,'marginRight','auto');
    STYLED(icon,'border','none');

    if (onClick) {

        icon.addEventListener('click', onClick);

    }
    
    icon.src = PATH;

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,icon),
        ()=>ADD('',icon)
    )
    
}

export{ICONS}