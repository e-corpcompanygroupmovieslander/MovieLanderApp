import { ADD, CONDITION, STYLED } from "../../CONNECTION/Connection.js";


//CREATE A TEXTAREA
const TEXTAREA = (ELEMENT,LABEL, CLASS) => {

    const input = document.createElement('textarea');

    //Enter Text Name
    CONDITION(LABEL,
    ()=>input.placeholder=LABEL,
    ()=>input.placeholder='',
    )
    
    // STYLES
    STYLED(input, 'position', 'relative');
    STYLED(input, 'background', '#00000080');
    STYLED(input, 'width', '92%');
    STYLED(input, 'left', '2%');
    STYLED(input, 'height', '100px');
    STYLED(input, 'minHeight', '16px');
    STYLED(input, 'marginTop', '0.2rem');
    STYLED(input, 'marginBottom', '0.2rem');
    STYLED(input, 'border', 'none');
    STYLED(input, 'outline', 'none');
    STYLED(input, 'borderRadius', '5px');
    STYLED(input, 'paddingLeft', '0.5rem');
    STYLED(input, 'color', '#ffffff');
    STYLED(input, 'textAlign', 'left');

    //ADD EVENT LISET
    input.addEventListener('input',()=>{
        STYLED(input, 'background', '#00000080');
        STYLED(input, 'border', 'none');
        STYLED(input, 'outline', 'none');
    })
    
    if (CLASS) {
        input.classList.add(CLASS);
    }
    
    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,input),
        ()=>ADD('',input)
    )
      
};

export{TEXTAREA}