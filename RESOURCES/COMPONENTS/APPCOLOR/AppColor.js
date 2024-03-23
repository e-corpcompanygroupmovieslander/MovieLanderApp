import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//APPMODE
const APPCOLOR = (ELEMENT,COLOR) => {

    if (ELEMENT) {

        STYLED(ELEMENT,'color',COLOR);
        
    } else {

        STYLED(document.body,'color',COLOR);
              
    }

};

export{APPCOLOR}