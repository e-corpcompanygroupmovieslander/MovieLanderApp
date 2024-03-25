import { LOGINAPI } from "../../../APIS/Api.js";
import { WINDOWSHOMEPAGE } from "../HomePage/homePage.js";


const WINDOWSLOGINPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
    <h1 class='WindowsAppLoginName'>Movie Lander</h1>
    <br>
    <h1 id='WindowsMessage' class='WindowsAppLoginName'>Enter The Secret Code In Your Android Device Here</h1>
    <br>
    <input class='WindowsSecretCode' type="text" placeholder='Enter Your Secret Code'>
    <br>
    <button class='WindowsLoginButton'>Connect</button>

    

    `);

    const WINDOWSLOGINBUTTON=document.querySelector('.WindowsLoginButton');

    const WINDOWSLOGININPUT=document.querySelector('.WindowsSecretCode');
    const MESSAGE=document.querySelector('#WindowsMessage');

    WINDOWSLOGINBUTTON.addEventListener('click',()=>{
        
        if (WINDOWSLOGININPUT.value) {

            DISPLAY(WINDOWSLOGINBUTTON,`

            <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
            
            `)

            fetch(LOGINAPI)

            .then(res=>res.json())

            .then((result) => {

                const user = result.find(user => user.SecretCode === WINDOWSLOGININPUT.value);
                
                if (user) {
                    
                    localStorage.setItem('User',user.SecretCode);

                    WINDOWSHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
                    
                } else {

                    localStorage.removeItem('User');
                    
                    DISPLAY(MESSAGE,'User Account DoesNot Exist');

                    setTimeout(() => {
                       
                        DISPLAY(MESSAGE,'Enter The Secret Code In Your Android Device Here');
                        
                        DISPLAY(WINDOWSLOGINBUTTON,`Connect`);

                    }, 2000);

                }

            }).catch((err) => {

                DISPLAY(MESSAGE,'Something Went Wrong');

                setTimeout(() => {
                   
                    DISPLAY(MESSAGE,'Enter The Secret Code In Your Android Device Here');
                    
                    DISPLAY(WINDOWSLOGINBUTTON,`Connect`);

                }, 2000);
            });
            
        } else {
            
            DISPLAY(MESSAGE,'Enter Your SecretCode');

            setTimeout(() => {
               
                DISPLAY(MESSAGE,'Enter The Secret Code In Your Android Device Here');
                
            }, 2000);

        }

    })

}

export{WINDOWSLOGINPAGE}