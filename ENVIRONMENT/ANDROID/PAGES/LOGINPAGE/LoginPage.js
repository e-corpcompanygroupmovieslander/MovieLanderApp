import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js"
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js"
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js"
import { VIBRATION } from "../../../../RESOURCES/PLUGINS/VIBRATION/Vibration.js"

const LOGINPAGE=(DIV)=>{

    CLEAR(DIV);

    TEXT(DIV,'h1','Movie Lander','AppName',()=>{});

    VIBRATION(500);
    


}

export{LOGINPAGE}