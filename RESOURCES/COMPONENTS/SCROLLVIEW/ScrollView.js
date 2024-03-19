import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { CONDITION } from "../../FUNCTIONS/CONDITION/Condition.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//CREATE A SCROLL VIEW
const SCROLLVIEW=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','auto');
    STYLED(DIV,'background','#00000080')
    STYLED(DIV,'left','0');
    STYLED(DIV,'top','0');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'borderRadius','0px');
    STYLED(DIV,'overflowX','hidden');
    STYLED(DIV,'overflowY','auto');
    STYLED(DIV,'display','block');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

export{SCROLLVIEW}