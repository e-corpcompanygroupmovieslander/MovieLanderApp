import { DELETEACCOUNTPOLICY, DELETEACCOUNTPOST} from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDDELETEACCOUNTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    
        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Account Deletion</h1>

        </div>

        <div class='PrivacyPolicyDiv'></div>
    
    `);
    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const PRIVACYPOLICYDIV=document.querySelector('.PrivacyPolicyDiv');

    DISPLAY(PRIVACYPOLICYDIV,`
    
        <img  id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `);

    fetch(DELETEACCOUNTPOLICY)

    .then(res =>res.text())

    .then((result) => {

        CLEAR(PRIVACYPOLICYDIV);

        DISPLAY(PRIVACYPOLICYDIV,`

        <h1 class='Message'>Read The Delete Account Policies Carefully</h1>
        ${result}
        <h1 id='MessageShow' class='Message'>Enter Reason For Account Deletion</h1>
        <textarea class="DeleteText" placeholder="Enter Reason For Account Deletion" cols="30" rows="10"></textarea>
        <button class='AGREEBUTTON'>I AGREE</button>
        <button class='DELETEACCOUNTBUTTON'>DELETE MY ACCOUNT</button>
        <br><br>
        `);

        const AGREEBUTTON=document.querySelector('.AGREEBUTTON');

        AGREEBUTTON.addEventListener('click',()=>{

            if (localStorage.getItem('DeleteAccount')) {

                ADVANCE.REMOVESTORAGE('local','DeleteAccount');
                
                STYLED(AGREEBUTTON,'background','#00000080');

            } else {

                ADVANCE.ADDSTORAGE('local','DeleteAccount','TRUE');
                
                STYLED(AGREEBUTTON,'background','red');
                
            }

        })

        const DELETEACCOUNTBUTTON=document.querySelector('.DELETEACCOUNTBUTTON');

        const MESSAGE=document.querySelector('#MessageShow');

        const REASON=document.querySelector('.DeleteText');


        DELETEACCOUNTBUTTON.addEventListener('click',()=>{

            if (REASON.value && localStorage.getItem('DeleteAccount') ) {
               
                DISPLAY(DELETEACCOUNTBUTTON,`

                    <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
                
                `)

                const USERDATA={
                    "User":localStorage.getItem('User'),
                    "Message":REASON.value,
                    "Terms":"ON",
                    "Date":new Date()
                }

                fetch(DELETEACCOUNTPOST,{
                    method:"POST",
                    mode:"no-cors",
                    body:JSON.stringify(USERDATA)
                })

                .then(res =>res.text())

                .then((result) => {

                    localStorage.clear();

                    sessionStorage.clear();

                    ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

                }).catch((err) => {
                    console.log(err)
                });
                
            } else {

                if (!REASON.value && localStorage.getItem('DeleteAccount') ) {

                      // Display a message for an invalid pin length
                    if ('vibrate' in navigator) {
                        navigator.vibrate(200);
                    }
                    
                    DISPLAY(MESSAGE,`Reason For Deletion Cannot be Empty`);

                    setTimeout(() => {

                        DISPLAY(MESSAGE,`Enter Reason For Account Deletion`);
                    
                    }, 2000);

                } else {

                      // Display a message for an invalid pin length
                      
                    if (REASON.value && !localStorage.getItem('DeleteAccount')) {

                          // Display a message for an invalid pin length
                        if ('vibrate' in navigator) {
                            navigator.vibrate(200);
                        }
                        
                        DISPLAY(MESSAGE,`Agree To Terms And Conditions`);

                        setTimeout(() => {

                            DISPLAY(MESSAGE,`Enter Reason For Account Deletion`);
                    
                        }, 2000);

                    } else {
                         
                        DISPLAY(MESSAGE,`Check All Requirement `);

                          // Display a message for an invalid pin length
                        if ('vibrate' in navigator) {
                            navigator.vibrate(200);
                        }

                        setTimeout(() => {

                            DISPLAY(MESSAGE,`Enter Reason For Account Deletion`);
                    
                        }, 2000);

                    }

                }
                     
            }

        })


    }).catch((err) => {

        console.log(err);
        
    });

}

export{ANDROIDDELETEACCOUNTPAGE}