//CREATE A BREAK
const BREAK=(ELEMENT)=>{

    const spacer=document.createElement('br')

    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,spacer),
        ()=>ADD(document.body,spacer)
    )

}

export{BREAK}