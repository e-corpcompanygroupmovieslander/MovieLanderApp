import { MOVIELANDERPNG } from "../../../../RESOURCES/ASSETS/IMAGES/MOVIELANDERIMAGES/MovieLanderPng.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { INPUT } from "../../../../RESOURCES/COMPONENTS/INPUT/Input.js"
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js"
import { BREAK } from "../../../../RESOURCES/FUNCTIONS/BREAK/Break.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const LOGINPAGE=(DIV)=>{

    BREAK(DIV);

    CLEAR(DIV);

    IMAGE(DIV,MOVIELANDERPNG,'AppImage',()=>{})   
    
    DECLARATION('.AppImage',(ELEMENT)=>{
        STYLED(ELEMENT,'width','30%');
        STYLED(ELEMENT,'height','auto');
        STYLED(ELEMENT,'padding','15% 5%');
        STYLED(ELEMENT,'margin','2% 30%');
        
    })

    INPUT(DIV,'email','Enter User Email','');

    INPUT(DIV,'password','Enter User Email','');

    TEXT(DIV,'h2','ForgotPassword?','Forgot',()=>{})

    BUTTON(DIV,'LogIn','','',()=>{

        HOMEPAGE(DIV);
        
    })
    
    BUTTON(DIV,'Create Account','','',()=>{
        
    })
    
}

export{LOGINPAGE}