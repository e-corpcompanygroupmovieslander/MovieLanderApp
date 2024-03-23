import { DECLARATION } from "../DECLARATION/Declaration.js";
import { STYLED } from "../STYLED/Styled.js";


const BODY=()=>{

    DECLARATION('body',(ELEMENT)=>{

        STYLED(ELEMENT,'position','fixed');STYLED(ELEMENT,'padding','0');
        STYLED(ELEMENT,'margin','0');STYLED(ELEMENT,'display','display');
        STYLED(ELEMENT,'overFlow','hidden');STYLED(ELEMENT,'top','0');
        STYLED(ELEMENT,'bottom','0');STYLED(ELEMENT,'fontSize','16px');
        STYLED(ELEMENT,'fontFamily','san-serif');STYLED(ELEMENT,'scrollBehavior','smooth');
        STYLED(ELEMENT,'width','100%');STYLED(ELEMENT,'height','auto');

    })

}

export{BODY}