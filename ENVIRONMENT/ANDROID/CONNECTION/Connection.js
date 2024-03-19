import { CONDITION } from "../../../RESOURCES/FUNCTIONS/CONDITION/Condition.js"
import { HOMEPAGE } from "../PAGES/HOMEPAGE/HomePage.js"
import { LOGINPAGE } from "../PAGES/LOGINPAGE/LoginPage.js"

const ANDROIDCONNECTION=(DIV)=>{

    CONDITION(localStorage.getItem('User'),

    ()=>HOMEPAGE(DIV),

    ()=>LOGINPAGE(DIV)
    
    )

}

export{ANDROIDCONNECTION}