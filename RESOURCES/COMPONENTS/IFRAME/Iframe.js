import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { CONDITION } from "../../FUNCTIONS/CONDITION/Condition.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//CREATE A IFRAME
const IFRAME=(ELEMENT,PATH,CLASS)=>{
    const web=document.createElement('iframe');
    web.src=PATH;

    if (CLASS) {
        web.classList.add(CLASS);
    }

    STYLED(web,'position','relative');
    STYLED(web,'width','100%');
    STYLED(web,'height','100%');
    STYLED(web,'overflowX','hidden');
    STYLED(web,'overflowY','hidden');
    STYLED(web,'display','block');
    STYLED(web,'background','#00000080');
    STYLED(web,'border','none');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,web),
        ()=>ADD('',web)
    )

}

export{IFRAME}