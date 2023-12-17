import { LOGINAPI } from "../../../APIS/Api.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDCREATEACCOUNTPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <h1 class='AppName'>Movie Lander</h1>

        <h1 class='Message'></h1>

        <input type="text" id='UserNameHolder' placeholder="Enter UserName">
        
        <input type="email" id='EmailHolder' placeholder="Enter Email">

        <input type="password" id='PasswordHolder' placeholder="Enter Password">

        <input type="text" id='DateHolder' placeholder="Enter Date Of Birth">

        <input type="tel" id='TelephoneHolder' placeholder="Enter Telephone Number">

        <input type="text" id='LocationHolder' placeholder="Enter Location">

        <button class='CreateUserAccountButton'>Create Account</button>

        <button class='LogInAccountButton'>LogIn</button>

    `);


    const MESSAGE=document.querySelector('.Message');
    const USERNAME=document.querySelector('#UserNameHolder');
    const EMAIL=document.querySelector('#EmailHolder');
    const DATE=document.querySelector('#DateHolder');
    const PASSWORD=document.querySelector('#PasswordHolder');
    const TELEPHONE=document.querySelector('#TelephoneHolder');
    const LOCATION=document.querySelector('#LocationHolder');
    const CREATEACCOUNTBUTTON=document.querySelector('.CreateUserAccountButton');

    DATE.addEventListener('click',()=>{

        DATE.type='date';

    });

    const LOGINBUTTON=document.querySelector('.LogInAccountButton');

    LOGINBUTTON.addEventListener('click',()=>{

        ANDROIDLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        if (USERNAME.value && EMAIL.value && PASSWORD.value && TELEPHONE.value && LOCATION.value) {
        
            DISPLAY(CREATEACCOUNTBUTTON,`

                <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
        
            `);

            ADVANCE.GETPACKAGE(LOGINAPI,'cors')

            .then((result) => {

                const users=result.find(user => user.Email===EMAIL.value);

                if (users) {

                    DISPLAY(MESSAGE,`User Email Taken `);

                    setTimeout(() => {
        
                        DISPLAY(MESSAGE,``);
        
                        DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                        
                    }, 2000);
                    
                    
                } else {
                   
                    //SEND DATA TO DATABASE
                 
                }

                }).catch((err) => {

                    DISPLAY(MESSAGE,`SomeThing Went Wrong`);

                    setTimeout(() => {

                    DISPLAY(MESSAGE,``);

                    DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                    
                    }, 2000);

                });


        } else {
          
            DISPLAY(MESSAGE,`Fill All Parts`);
    
            setTimeout(() => {
    
                DISPLAY(MESSAGE,``);
                
            }, 2000);
            
        }

    })

    


}

export{ANDROIDCREATEACCOUNTPAGE}