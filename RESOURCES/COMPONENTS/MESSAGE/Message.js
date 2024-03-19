import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { CONDITION } from "../../FUNCTIONS/CONDITION/Condition.js";
import { DISPLAY } from "../../FUNCTIONS/DISPLAY/Display.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";
import { VIBRATION } from "../../PLUGINS/VIBRATION/Vibration.js";

//DISPLAY A MESSAGE
const MESSAGE=(ELEMENT,Message,TIME,TIMER)=>{

    //Enable Vibration
    CONDITION(TIMER,
        ()=>VIBRATION(TIMER),
        ()=>VIBRATION(500)
    )
    
    const DIV=document.createElement('div');

    //STYLES
    STYLED(DIV,'display','inline-flex');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','50px');
    STYLED(DIV,'background','#00000080');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'marginBottom','1rem');
    STYLED(DIV,'left','2%');

    //CREATE MESSAGE FOR IT

    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','18px');
    STYLED(TEXT,'marginTop','auto');
    STYLED(TEXT,'marginBottom','auto');
    STYLED(TEXT,'marginLeft','auto');
    STYLED(TEXT,'marginRight','auto');
    STYLED(TEXT,'color','white');
    STYLED(TEXT,'fontStyle','itallic');

    //Append Message
    CONDITION(Message,
        ()=>DISPLAY(TEXT,Message),
        ()=>DISPLAY(TEXT,'')
    )

    ADD(DIV,TEXT);

    //Set Time Out
    CONDITION(TIME,
        ()=>setTimeout(() => {DISPLAY(TEXT,''),STYLED(DIV,'display','none')}, TIME),
        ()=>setTimeout(() => {DISPLAY(TEXT,''),STYLED(DIV,'display','none')}, 2000)
    )

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

export{MESSAGE}