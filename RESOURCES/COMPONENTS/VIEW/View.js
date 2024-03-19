import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { CONDITION } from "../../FUNCTIONS/CONDITION/Condition.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//CREATE A  VIEW
const VIEW=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','relative');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'background','#00000080')
    STYLED(DIV,'left','2%');
    STYLED(DIV,'marginTop','1rem');
    STYLED(DIV,'marginBottom','1rem');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'overFlow','hidden');

   //Append
   CONDITION(ELEMENT,
    ()=>ADD(ELEMENT,DIV),
    ()=>ADD('',DIV)
    )

}

export{VIEW}