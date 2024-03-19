//CREATE ELEMENT
const CREATEELEMENT=(ITEM,CLASS,callback)=>{

    const ELEMENT=document.createElement(ITEM);

    ELEMENT.classList.add(CLASS)

    return callback(ELEMENT);

}

export{CREATEELEMENT}