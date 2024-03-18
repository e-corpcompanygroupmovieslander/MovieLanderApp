//CREATE A BOTTOM DRAWER
const BOTTOMDRAWER=(ELEMENT,CLASS)=>{

    const DIV=document.createElement('div');

    if (CLASS) {
      
        DIV.classList.add(CLASS);
        
    }

    //STYLES
    STYLED(DIV,'position','absolute');
    STYLED(DIV,'width','100%');
    STYLED(DIV,'height','auto');
    STYLED(DIV,'left','0%');
    STYLED(DIV,'top','0');
    STYLED(DIV,'bottom','0');
    STYLED(DIV,'borderRadius','0px');
    STYLED(DIV,'overFlowY','auto');
    STYLED(DIV,'overFlowX','hidden');
    STYLED(DIV,'display','block');
    STYLED(DIV,'border','1px  solid #DCDCDC80');

    //Append
    CONDITION(localStorage.getItem('AppColour'),
        ()=>STYLED(DIV,'background',localStorage.getItem('AppColour')),
        ()=>STYLED(DIV,'background','#DCDCDC')
    )

    //CREATE ICON
    const Image=document.createElement('img');
    Image.src=WHITECLOSEICON;
    //STYLE
    STYLED(Image,'position','absolute');
    STYLED(Image,'background','#00000080');
    STYLED(Image,'width','25px');
    STYLED(Image,'height','25px');
    STYLED(Image,'right','5px');
    STYLED(Image,'padding','5px');
    STYLED(Image,'borderRadius','20px');
   
    Image.addEventListener('click',()=>{

        STYLED(DIV,'display','none');

    })

    ADD(DIV,Image);
    
    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,DIV),
        ()=>ADD('',DIV)
    )

}

export{BOTTOMDRAWER}