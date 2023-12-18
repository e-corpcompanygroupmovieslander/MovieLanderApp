import { LOGINAPI } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js";
import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";


const ANDROIDLOGINPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
        <h1 class='AppName'>Movie Lander</h1>

        <h1 class='Message'></h1>
        
        <input type="email" id='EmailHolder' placeholder="Enter Email">

        <input type="password" id='PasswordHolder' placeholder="Enter Password">

        <button class='LogInButton'>LogIn</button>

        <button class='CreateAccountButton'>Create Account</button>

    `);

    const LOGINBUTTON=document.querySelector('.LogInButton');

    LOGINBUTTON.addEventListener('click',()=>{

        const EMAIL=document.querySelector('#EmailHolder');

        const PASSWORD=document.querySelector('#PasswordHolder');

        const MESSAGE=document.querySelector('.Message');

        if ( EMAIL.value && PASSWORD.value ) {

            DISPLAY(LOGINBUTTON,`

                <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
            
            `);

            ADVANCE.GETPACKAGE(LOGINAPI,'cors')

            .then((result) => {

                const users=result.find(user => user.Email===EMAIL.value && user.Password ===PASSWORD.value );

                if (users) {

                    if (users.Premium) {
                        
                        ADVANCE.ADDSTORAGE('local','Premium','TRUE');

                    } else {
                        
                        ADVANCE.REMOVESTORAGE('local','Premium');
                    }
                    
                    ADVANCE.ADDSTORAGE('local','User',users.SecretCode);

                    ANDROIDPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
                    
                } else {
                   
                    DISPLAY(MESSAGE,`User Doesnot Exist`);

                    setTimeout(() => {
        
                        DISPLAY(MESSAGE,``);
        
                        DISPLAY(LOGINBUTTON,`LogIn`);
                        
                    }, 2000);
                    
                }

            }).catch((err) => {

                DISPLAY(MESSAGE,`SomeThing Went Wrong`);

                setTimeout(() => {

                   DISPLAY(MESSAGE,``);

                   DISPLAY(LOGINBUTTON,`LogIn`);
                
                }, 2000);

            });
            
        } else {
           
            DISPLAY(MESSAGE,`Fill All Parts`);

            setTimeout(() => {

                DISPLAY(MESSAGE,``);
                
            }, 2000);
            
        }

    })

    const CREATEACCOUNTBUTTON=document.querySelector('.CreateAccountButton');

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        ANDROIDCREATEACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

}

export{ANDROIDLOGINPAGE};