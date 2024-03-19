import { STYLED } from "../STYLED/Styled.js";

//APPNOTIFICATIONS
const APPNOTIFICATIONS=()=>{

    const DIV=document.createElement('div');

    //DIV STYLES
    STYLED(DIV,'background','#00000080');
    STYLED(DIV,'color','#ffff');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','30%');
    STYLED(DIV,'display','block');
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'borderRadius','20px 20px 0px 0px');
    STYLED(DIV,'left','0%');
    STYLED(DIV,'bottom','0');

    if (localStorage.getItem('AppColour')) {
        STYLED(DIV,'border','1px  solid #DCDCDC80');
        STYLED(DIV,'background',localStorage.getItem('AppColour'));
    } else {
        STYLED(DIV,'background','#00000080'); 
    }

    //CREATE TEXTS ON IT
    const TEXT=document.createElement('h1');
    //STYLES
    STYLED(TEXT,'textAlign','center');
    STYLED(TEXT,'position','relative');
    STYLED(TEXT,'fontSize','20px');

    //THE TEXT
    TEXT.innerHTML=`Allow App Notifications`;

    //CREATE BUTTON FOR DENY
    const Buttons=document.createElement('button');
    //STYLES
    STYLED(Buttons,'background','#00000080');
    STYLED(Buttons,'width','45%');
    STYLED(Buttons,'height','50px');
    STYLED(Buttons,'position','absolute');
    STYLED(Buttons,'height','50px');
    STYLED(Buttons,'bottom','10px');
    STYLED(Buttons,'left','10px');
    STYLED(Buttons,'borderRadius','10px');
    STYLED(Buttons,'border','none');
    STYLED(Buttons,'color','white');
    Buttons.innerHTML='Deny';

    //CLICK ON DENY
    Buttons.addEventListener('click',()=>{

        localStorage.setItem('AppNotifications','FALSE')

        STYLED(DIV,'display','none');

    })

    DIV.append(Buttons)

    //CREATE BUTTON FOR ALLOW
    const Button=document.createElement('button');
    //STYLES
    STYLED(Button,'background','#00000080');
    STYLED(Button,'width','45%');
    STYLED(Button,'height','50px');
    STYLED(Button,'position','absolute');
    STYLED(Button,'height','50px');
    STYLED(Button,'bottom','10px');
    STYLED(Button,'right','10px');
    STYLED(Button,'borderRadius','10px');
    STYLED(Button,'border','none');
    STYLED(Button,'color','white');
    Button.innerHTML='Allow';

    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        localStorage.setItem('AppNotifications','TRUE')

        STYLED(DIV,'display','none');

    })

    //ENTER DATA
    DIV.append(TEXT);

    DIV.append(Button);

    if (!localStorage.getItem('AppNotifications')) {
       
        document.body.append(DIV); 
          
    } 

}

export{APPNOTIFICATIONS}