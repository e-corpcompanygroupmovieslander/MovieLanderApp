import { BUTTON } from "../../../RESOURCES/COMPONENTS/BUTTON/Button.js"
import { TEXT } from "../../../RESOURCES/COMPONENTS/TEXT/Text.js"
import { BREAK } from "../../../RESOURCES/FUNCTIONS/BREAK/Break.js"
import { CLEAR } from "../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CONDITION } from "../../../RESOURCES/FUNCTIONS/CONDITION/Condition.js"
import { HOMEPAGE } from "../PAGES/HOMEPAGE/HomePage.js"
import { LOGINPAGE } from "../PAGES/LOGINPAGE/LoginPage.js"

const ANDROIDCONNECTION=(DIV)=>{

    /*

    CLEAR(DIV);

    BREAK(DIV),BREAK(DIV),BREAK(DIV),BREAK(DIV);

    TEXT(DIV,'h1','App Under Maintence','',()=>{})

    BREAK(DIV),
    BREAK(DIV),
    BREAK(DIV),
    BREAK(DIV);

    BUTTON(DIV,'Contact Us','','',()=>{

        open('https://www.e-corpcompanygroup.com');

    })


    */

    CONDITION(!localStorage.getItem('User'),

    ()=>HOMEPAGE(DIV),

    ()=>LOGINPAGE(DIV)
    
    )

}

export{ANDROIDCONNECTION}