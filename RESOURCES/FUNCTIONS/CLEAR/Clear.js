import { CONDITION } from "../CONDITION/Condition.js"
import { DISPLAY } from "../DISPLAY/Display.js"

CONDITION
//CLEAR
const CLEAR=(ELEMENT)=>{

    CONDITION(ELEMENT,
        ()=>DISPLAY(ELEMENT,''),
        ()=>DISPLAY(document.body,'')
    )

}

export{CLEAR}

