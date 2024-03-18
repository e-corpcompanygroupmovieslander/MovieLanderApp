//CREATE A HEADER
const HEADER=(ELEMENT,CLASS)=>{

    const header=document.createElement('footer');

    if (CLASS) {
      
        header.classList.add(CLASS)
        
    }

    //STYLED
    STYLED(header,'position','absolute');
    STYLED(header,'top','0');
    STYLED(header,'background','#00000080');
    STYLED(header,'width','100%');
    STYLED(header,'height','50px');
    STYLED(header,'display','inline-flex');

     //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,header),
        ()=>ADD('',header)
    )

}

export{HEADER}