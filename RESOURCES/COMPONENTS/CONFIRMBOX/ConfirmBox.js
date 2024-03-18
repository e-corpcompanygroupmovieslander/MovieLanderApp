//CONFIRM BOX
const CONFIRMBOX=(ELEMENT,TITLE,DATA)=>{

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
        ()=>DISPLAY(Para,'This Is a Confirmation')
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
    STYLED(Button,'width','45%');
    STYLED(Button,'height','50px');
    STYLED(Button,'position','absolute');
    STYLED(Button,'height','50px');
    STYLED(Button,'bottom','10px');
    STYLED(Button,'right','10px');
    STYLED(Button,'borderRadius','10px');
    STYLED(Button,'border','none');
    STYLED(Button,'color','white');
    Button.innerHTML='OK';

    //CLICK ON ALLOW
    Button.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    //CREATE BUTTON FOR ALLOW
    const Button1=document.createElement('button');
    //STYLES
    STYLED(Button1,'background','#00000080');
    STYLED(Button1,'width','45%');
    STYLED(Button1,'height','50px');
    STYLED(Button1,'position','absolute');
    STYLED(Button1,'height','50px');
    STYLED(Button1,'bottom','10px');
    STYLED(Button1,'left','10px');
    STYLED(Button1,'borderRadius','10px');
    STYLED(Button1,'border','none');
    STYLED(Button1,'color','white');
    Button1.innerHTML='Cancel';

    //CLICK ON ALLOW
    Button1.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    //ENTER DATA
   
    ADD(DIV,TEXT);

    ADD(DIV,Para);

    ADD(DIV,Button);

    ADD(DIV,Button1);

   //Append
   CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

export{CONFIRMBOX}