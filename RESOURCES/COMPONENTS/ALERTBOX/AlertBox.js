import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { CONDITION } from "../../FUNCTIONS/CONDITION/Condition.js";
import { DISPLAY } from "../../FUNCTIONS/DISPLAY/Display.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//ALERT BOX
const ALERTBOX=(ELEMENT,TITLE,DATA)=>{

    const DIV=document.createElement('div');

    //DIV STYLES
    STYLED(DIV,'color','#ffff');
    STYLED(DIV,'width','95%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'display','block');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'borderRadius','10px');
    STYLED(DIV,'left','2%');
    STYLED(DIV,'bottom','40%');
    STYLED(DIV,'border','1px  solid #DCDCDC80');

    CONDITION(localStorage.getItem('AppColour'),
    ()=>STYLED(DIV,'background',localStorage.getItem('AppColour')),
    ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE TEXTS ON IT
    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','20px');
    
    //Append
    CONDITION(TITLE,
        ()=>DISPLAY(TEXT,TITLE),
        ()=>DISPLAY(TEXT,'Advance')
    )

    //CREATE THE DATA DIV
    const Para=document.createElement('p');
    //STYLE

    //Append
    CONDITION(DATA,
        ()=>DISPLAY(Para,DATA),
        ()=>DISPLAY(Para,'This Is an Alert')
    )

    //STYLES
    STYLED(Para,'width','100%');
    STYLED(Para,'textAlign','center');
    STYLED(Para,'position','relative');
    STYLED(Para,'display','block');

    //CREATE BUTTON FOR ALLOW
    const Button=document.createElement('button');
    //STYLES
    STYLED(Button,'background','#00000080');
    STYLED(Button,'width','95%');
    STYLED(Button,'height','50px');
    STYLED(Button,'position','absolute');
    STYLED(Button,'height','50px');
    STYLED(Button,'bottom','10px');
    STYLED(Button,'right','10px');
    STYLED(Button,'borderRadius','10px');
    STYLED(Button,'border','none');
    STYLED(Button,'color','white');

    DISPLAY(Button,'Ok');
    
    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    //ENTER DATA

    ADD(DIV,TEXT);

    ADD(DIV,Para);

    ADD(DIV,Button);

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

export{ALERTBOX}