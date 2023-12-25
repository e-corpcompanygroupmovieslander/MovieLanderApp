import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDPARENTALCONTROL=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const STYLED=ADVANCE.STYLED;

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Parental Control</h1>

        </div>

        <div class='MessageDiv'>

            <h1 id='Message'></h1>

        </div>

        <div class='ChatDivMessages'></div>

        <input id='PinInput' class='RequestMovieInput' type='number' placeholder='Enter Your Pin'/>
    
        <button id='PinOn' class='RequestSendButton'></button>

    `);

    const MessageDiv=document.querySelector('.MessageDiv');
        
    STYLED(MessageDiv,'background',localStorage.getItem('ModeColour'));

    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const ParentalControlButton=document.querySelector('.RequestSendButton');

    const ParentalControlInput=document.querySelector('.RequestMovieInput');

    const MESSAGE=document.querySelector('#Message')

    if (localStorage.getItem('ParentalControlPin')) {
                 
        DISPLAY(ParentalControlButton,`ON`);
        
    } else {
        
        DISPLAY(ParentalControlButton,`OFF`);

    }


    ParentalControlButton.addEventListener('click',()=>{

        if (ParentalControlInput.value.length>=5) {

            const STOREDPIN=localStorage.getItem('ParentalControlPin');

            const SETPIN=ParentalControlInput.value;

            if (STOREDPIN===SETPIN) {
                
                localStorage.removeItem('ParentalControlPin');

                ParentalControlButton.innerHTML='OFF';

                setTimeout(() => {
    
                    ParentalControlInput.value='';

                    ParentalControlButton.innerHTML='ON'; 
                    
                }, 2000);

            } else {
                
                
                STYLED(MessageDiv,'height','50px')

                MESSAGE.innerHTML='Enter Correct Pin';

                setTimeout(() => {
                    
                    ParentalControlInput.value='';

                    STYLED(MessageDiv,'height','0');

                    MESSAGE.innerHTML='';

                    if (localStorage.getItem('ParentalControlPin')) {
                     
                        ParentalControlButton.innerHTML='ON'; 
                        
                    } else {
                        
                        ParentalControlButton.innerHTML='OFF'; 
    
                    }
                    
                }, 2000);

            }

            if(!STOREDPIN){

                localStorage.setItem('ParentalControlPin',SETPIN);

                ParentalControlButton.innerHTML='OFF';

                setTimeout(() => {
    
                    ParentalControlInput.value='';

                    ParentalControlButton.innerHTML='ON'; 
                    
                }, 2000);

            }
                  
        } else {

            STYLED(MessageDiv,'height','50px')

            MESSAGE.innerHTML='Enter Atleast 5 digit Pin';
            
            setTimeout(() => {

                ParentalControlInput.value='';

                MESSAGE.innerHTML='';

                STYLED(MessageDiv,'height','0')

                if (localStorage.getItem('ParentalControlPin')) {

                    ParentalControlButton.innerHTML='OFF'; 
                    
                } else {
                    
                    ParentalControlButton.innerHTML='ON'; 

                }
                
            }, 2000);

        }

    })

}

export{ANDROIDPARENTALCONTROL}