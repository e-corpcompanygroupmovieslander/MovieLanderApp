//VIDEO ELEMENT
const VIDEO=(ELEMENT,PATH,CLASS)=>{

    const video=document.createElement('video');
    //STYLES
    STYLED(video,'position','relative');
    STYLED(video,'width','95%');
    STYLED(video,'height','30%');
    STYLED(video,'background','transparent');
    STYLED(video,'left','2%');
    STYLED(video,'marginTop','1rem');
    STYLED(video,'marginBottom','1rem');
    STYLED(video,'borderRadius','20px');

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

export{VIDEO}