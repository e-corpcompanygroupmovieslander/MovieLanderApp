import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { INPUT } from "../../../../RESOURCES/COMPONENTS/INPUT/Input.js"
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js"
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"

const LOGINPAGE=(DIV)=>{

    CLEAR(DIV);

    TEXT(DIV,'h1','Movie Lander','AppName',()=>{});

    INPUT(DIV,'email','Enter User Email','');

    INPUT(DIV,'password','Enter User Email','');

    BUTTON(DIV,'LogIn','','',()=>{
        
    })
    
    BUTTON(DIV,'Create Account','','',()=>{
        
    })
    
    


}

export{LOGINPAGE}