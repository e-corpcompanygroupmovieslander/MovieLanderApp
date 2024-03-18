import { ADD, CONDITION, STYLED } from "../../CONNECTION/Connection.js";


//AUDIO ELEMENT
const AUDIO=(ELEMENT,PATH,CLASS)=>{

    const video=document.createElement('audio');
    //STYLES
    STYLED(video,'position','relative');
    STYLED(video,'width','95%');
    STYLED(video,'height','30%');
    STYLED(video,'background','transparent'); 
    STYLED(video,'backgroundColor','transparent');
    STYLED(video,'left','2%');
    STYLED(video,'marginTop','1rem');
    STYLED(video,'marginBottom','1rem');
    STYLED(video,'borderRadius','20px');
    STYLED(video,'border','none');

    video.controls=true

    if (CLASS) {
        video.classList.add(CLASS);
    }

    video.src=PATH;

        //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,video),
        ()=>ADD('',video)
    )
}

export{AUDIO}