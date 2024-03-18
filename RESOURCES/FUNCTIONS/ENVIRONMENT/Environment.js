import { CONDITION } from "../CONDITION/Condition.js";
import { DECLARATION } from "../DECLARATION/Declaration.js";
import { STORE } from "../STORE/Store.js";
import { STYLED } from "../STYLED/Styled.js";

//ENVIRONMENT
const ENVIRONMENT=(TEXT)=>{

    CONDITION(TEXT,

        ()=>DECLARATION('body',(ELEMENT)=>{

            STORE('local','Environment','Test');

            STYLED(ELEMENT,'top','0');
            STYLED(ELEMENT,'bottom','0');

        }),
        ()=>DECLARATION('body',(ELEMENT)=>{

            STORE('local','Environment','Production');

            STYLED(ELEMENT,'top','30px');
            STYLED(ELEMENT,'bottom','0');

        })
        
    )
    
}

export{ENVIRONMENT}