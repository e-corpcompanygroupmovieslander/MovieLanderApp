//APPMODE
const APPMODE = (ELEMENT, IMG,DEFAULT) => {

    if (IMG === 'Image') {

        document.body.style.backgroundImage = `url(${ELEMENT})`;

        document.body.style.backgroundRepeat = 'no-repeat';

        document.body.style.backgroundPosition = 'center';
        
        document.body.style.backgroundSize = 'cover';

    } else {

        if (ELEMENT) {
           
            localStorage.setItem('AppColour',ELEMENT);

            document.body.style.background = ELEMENT;
            
        } else {
           
            localStorage.setItem('AppColour',DEFAULT);

            document.body.style.background = DEFAULT;
            
        }
        
    }
};

export{APPMODE}