//APPCOLOR
const APPCOLOR=(ELEMENT,COLOR)=>{

    //Append
    CONDITION(ELEMENT,
        ()=>STYLED(ELEMENT,'color',COLOR),
        ()=>document.body.style.color=COLOR
    )

}

export {APPCOLOR}