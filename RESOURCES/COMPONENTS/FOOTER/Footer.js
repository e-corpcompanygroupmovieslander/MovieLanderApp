//CREATE A FOOTER
const FOOTER=(ELEMENT,CLASS)=>{

    const footer=document.createElement('footer');

    if (CLASS) {

        footer.classList.add(CLASS);

    }

    //STYLED
    STYLED(footer,'position','absolute');
    STYLED(footer,'bottom','0');
    STYLED(footer,'background','#00000080');
    STYLED(footer,'width','100%');
    STYLED(footer,'height','50px');
    STYLED(footer,'display','inline-flex');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,footer),
        ()=>ADD('',footer)
    )

}

export{FOOTER}