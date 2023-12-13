import { LOGINUSER } from "./LoginUser.js";

const LOGINPAGE=(DIV)=>{

    DIV.innerHTML=`

    <h1 id='AppName'>Movie Lander</h1>

    <h1 class='LoginMessage'></h1>

    <input type="email" id='LoginEmail' placeholder="Enter Email">

    <input type="password" id='LoginPassword' placeholder="Enter Password">

    <button class='LoginUserButton'>LogIn</button>

    <button>Create Account</button>
    
    `;

    const LoginUserButton=document.querySelector('.LoginUserButton');

    LoginUserButton.addEventListener('click',()=>{

        LOGINUSER(DIV);

    })

}

export{LOGINPAGE}