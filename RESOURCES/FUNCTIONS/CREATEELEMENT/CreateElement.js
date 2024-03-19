//CREATE ELEMENT
const CREATEELEMENT=(ITEM,callback)=>{

    const ELEMENT=document.createElement(ITEM);

    return callback(ELEMENT);

}

export{CREATEELEMENT}