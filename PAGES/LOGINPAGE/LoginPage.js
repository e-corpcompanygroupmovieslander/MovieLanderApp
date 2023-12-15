import { LOGINURL } from "../../APIS/Api.js";
import { CREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const LOGINPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV)

    DISPLAY(DIV,`

        <h1>Movie Lander</h1>

        <h1 class='Message'></h1>

        <input id='Email' type="email" placeholder='Enter Email'>

        <input id='Password' type="password" placeholder='Enter Password'>

        <button class='LoginButton'>LogIn</button>

        <button class='CreateAccountButton' >Create Account</button>
    
    `);

    const LoginButton=document.querySelector('.LoginButton');

    const Email=document.querySelector('#Email');

    const Password=document.querySelector('#Password');

    const Message=document.querySelector('.Message');

    LoginButton.addEventListener('click',()=>{

        if (Email.value && Password.value) {

            DISPLAY(LoginButton,`
            
            <img class='LoadingIcon' src='${ICONS}loading.png'/>

            `)

            ADVANCE.GETPACKAGE(LOGINURL,'cors')

            .then((result) => {

                const user=result.find(user => user.Email===Email.value &&  user.Password === Password.value );
                
                if (user) {

                    ADVANCE.ADDSTORAGE('local','User',user.SecretCode);  

                    HOMEPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);
                    
                } else {
                    
                    DISPLAY(Message,`User Not Found`);

                    setTimeout(() => {
                       
                        DISPLAY(Message,``);

                        DISPLAY(LoginButton,`LoginButton`)
                        
                    }, 2000);

                }

            }).catch((err) => {

                DISPLAY(Message,`Something Went Wrong`);

                    setTimeout(() => {
                       
                        DISPLAY(Message,``);

                        DISPLAY(LoginButton,`LoginButton`)
                        
                    }, 2000);
            });
            
        } else {
            
            DISPLAY(Message,`Fill All Parts`);

            setTimeout(() => {
               
                DISPLAY(Message,``);
                
            }, 2000);


        }
        

    });

    const CREATEACCOUNTBUTTON=document.querySelector('.CreateAccountButton');

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        CREATEACCOUNTPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    });



}

export{LOGINPAGE}