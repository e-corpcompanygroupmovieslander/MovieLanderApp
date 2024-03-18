//CREATE A IFRAME
const IFRAME=(ELEMENT,PATH,CLASS)=>{
    const web=document.createElement('iframe');

    if (CLASS) {
        web.classList.add(CLASS);
    }

    STYLED(web,'position','relative');
    STYLED(web,'width','95%');
    STYLED(web,'height','30%');
    STYLED(web,'marginTop','1rem');
    STYLED(web,'marginBottom','1rem');
    STYLED(web,'marginLeft','0.5rem');
    STYLED(web,'marginRight','0.5rem');
    STYLED(web,'overflowX','hidden');
    STYLED(web,'overflowY','hidden');
    STYLED(web,'display','block');
    STYLED(web,'background','#00000080');
    STYLED(web,'border','none');
    STYLED(web,'borderRadius','20px');

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,web),
        ()=>ADD('',web)
    )

}

export{IFRAME}