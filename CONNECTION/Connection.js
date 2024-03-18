import { ANDROIDCONNECTION } from "../ENVIRONMENT/ANDROID/CONNECTION/Connection.js"
import { CONDITION } from "../RESOURCES/FUNCTIONS/CONDITION/Condition.js"

const VERIFY=(DIV)=>{

    CONDITION(localStorage.getItem('Device')==='Android',

    ()=>ANDROIDCONNECTION(DIV),

    ()=>null,
    
    )

}

export{VERIFY}