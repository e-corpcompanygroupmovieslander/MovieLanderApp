// Import statement for ANDROIDSETTINGSPAGE (assuming it's in the same directory)
import { PARENTALCONTROLTEXT } from "../../../APIS/Api.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDPARENTALCONTROL = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
    const STYLED = ADVANCE.STYLED;

    CLEAR(DIV);

    DISPLAY(DIV, `
        <div class='AndroidHeader'>
            <img class='BackIcon' src='${ICONS}back.png'/>
            <h1 class='Payments'>Parental Control</h1>
        </div>
        <br><br><br>
        <h1 class='Message'></h1>
        <div class='ChatDivMessages'></div>
        <input id='PinInput' minlength='4' maxlength='5' class='RequestMovieInput' type='number' placeholder='Enter Your Pin'/>
        <button id='PinOn' class='RequestSendButton'>ON</button>
    `);

    const BACKICON = document.querySelector('.BackIcon');
    BACKICON.addEventListener('click', () => {
        ANDROIDSETTINGSPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
    });

    const MESSAGE = document.querySelector('.Message');
    const ParentalControlButton = document.querySelector('.RequestSendButton');
    const ParentalControlInput = document.querySelector('.RequestMovieInput');

    const DATAHOLDER=document.querySelector('.ChatDivMessages');

    fetch(PARENTALCONTROLTEXT)

    .then(res=>res.text())

    .then((result) => {
        
        DATAHOLDER.innerHTML=result;

    }).catch((err) => {
       console.log(err) 
    });

    if (localStorage.getItem('ParentalControlPin')) {
        DISPLAY(ParentalControlButton, 'OFF');
        STYLED(ParentalControlButton, 'background', 'red');
    } else {
        DISPLAY(ParentalControlButton, 'ON');
        STYLED(ParentalControlButton, 'background', 'blue');
    }

    ParentalControlInput.addEventListener('input', () => {
        if (ParentalControlInput.value.length >= 5) {
            STYLED(ParentalControlInput, 'width', '55%');
            STYLED(ParentalControlButton, 'display', 'block');
        } else {
            STYLED(ParentalControlInput, 'width', '95%');
            STYLED(ParentalControlButton, 'display', 'none');
        }
    });

    ParentalControlButton.addEventListener('click', () => {
        if (ParentalControlInput.value.length >= 5) {
            if (localStorage.getItem('ParentalControlPin')) {
                if (ParentalControlInput.value === localStorage.getItem('ParentalControlPin')) {
                    // Turn off parental control
                    localStorage.removeItem('ParentalControlPin');
                    DISPLAY(ParentalControlButton, 'ON');
                    STYLED(ParentalControlButton, 'background', 'blue');
                    STYLED(ParentalControlInput, 'width', '95%');
                    STYLED(ParentalControlButton, 'display', 'none');
                    ParentalControlInput.value = '';
                } else {
                    
                     // Display a message for an invalid pin length
                    if ('vibrate' in navigator) {
                        navigator.vibrate(200);
                    }
                    STYLED(MESSAGE, 'height', '100px');
                    DISPLAY(MESSAGE, 'Enter Correct Pin');
                    setTimeout(() => {
                        DISPLAY(MESSAGE, '');
                    }, 2000);

                    ParentalControlInput.value = '';

                    STYLED(ParentalControlInput, 'width', '95%');

                    STYLED(ParentalControlButton, 'display', 'none');
                }
  
            } else {
                // Set the pin and turn on parental control
                localStorage.setItem('ParentalControlPin', ParentalControlInput.value);
                DISPLAY(ParentalControlButton, 'OFF');
                STYLED(ParentalControlButton, 'background', 'red');
                STYLED(ParentalControlInput, 'width', '95%');
                STYLED(ParentalControlButton, 'display', 'none');
                ParentalControlInput.value = '';
            }
        } else {
            // Display a message for an invalid pin length
            if ('vibrate' in navigator) {
                navigator.vibrate(200);
            }
            STYLED(MESSAGE, 'height', '100px');
            DISPLAY(MESSAGE, 'Enter 5 digit Pin');
            setTimeout(() => {
                DISPLAY(MESSAGE, '');
            }, 2000);
        }
    });
};

export { ANDROIDPARENTALCONTROL };
