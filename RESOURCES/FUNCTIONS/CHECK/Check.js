//CHECK DATA COMPARE
const CHECK = (ELEMENT, ACTION) => {

    const result = ELEMENT ;

    return ACTION(result ? result : false);

};

export{CHECK}