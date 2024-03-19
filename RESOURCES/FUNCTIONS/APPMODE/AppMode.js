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

    if (!localStorage.getItem('Environment')) {
        
        localStorage.setItem('ModeColour',DEFAULT);

        document.querySelector('div').style.background = DEFAULT;

        if (localStorage.getItem('Device')==='Android') {

            StatusBar.backgroundColorByHexString(localStorage.setItem('ModeColour',DEFAULT));
        
        }

    } 

    
};

export{APPMODE}