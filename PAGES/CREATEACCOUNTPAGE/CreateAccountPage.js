import { CREATEACCOUNTLINK, LOGINURL } from "../../APIS/Api.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const CREATEACCOUNTPAGE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
        
        <h1>Movie Lander</h1>

        <h1 class='Message'></h1>

        <input id='UserName' type="text" placeholder='Enter UserName'>

        <input id='Email' type="email" placeholder='Enter Email'>

        <input id='Password' type="password" placeholder='Enter Password'>

        <input id='Date' type="text" placeholder='Enter Date Of Birth'>

        <input id='Telephone' type="tel" placeholder='Enter Telephone'>

        <input id='Country' type="text" placeholder='Enter Country'>

        <button class='CreateAccountButton'>Create Account</button>

        <button class='LoginButton'>LogIn</button>

        
    `);

    const DATE=document.querySelector('#Date');

    DATE.addEventListener('click',()=>{

        DATE.type='date';

    });

    const LOGINBUTTON=document.querySelector('.LoginButton');

    LOGINBUTTON.addEventListener('click',()=>{

        LOGINPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);

    })

    const CREATEACCOUNTBUTTON=document.querySelector('.CreateAccountButton');

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        const USERNAME=document.querySelector('#UserName');
        const EMAIL=document.querySelector('#Email');
        const PASSWORD=document.querySelector('#Password');
        const TELEPHONE=document.querySelector('#Telephone');
        const COUNTRY=document.querySelector('#Country');

        const Message=document.querySelector('.Message');

        const firstLetter = EMAIL.value.charAt(0).toUpperCase();
                const birthYear = DATE.value.slice(-4); // Extract last 4 characters for the year
                
                // Calculate the length of the random string to make the total length 11
                const randomStringLength = 11 - 1 - 4; // 1 character for the first letter of email, 4 characters for the birth year
                
                // Generate the random string with the calculated length
                const randomString = generateRandomString(randomStringLength);
        
                // Ensure the total length of the secret code is 11
                const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
        
                const Users={
                    "UserName":USERNAME.value,
                    "Email":EMAIL.value,
                    "Password":PASSWORD.value,
                    "Password2":PASSWORD.value,
                    "Date":DATE.value,
                    "Telephone":TELEPHONE.value,
                    "Location":COUNTRY.value,
                    "CreatedOn":new Date(),
                    "SecretCode":secretCode,
                    "Premium":"TRUE",
                    "AppVersion":'7.8',
                    "Device": {
                        "Browser": {
                            "Name": getBrowserName(),
                            "Version": getBrowserVersion()
                        },
                        "OS": {
                            "Name": getOSName(),
                            "Version": getOSVersion()
                        },
                        "ScreenWidth": screen.width,
                        "ScreenHeight": screen.height
                    }
                };

                     // Function to get browser name
                     function getBrowserName() {

                        return navigator.appName;
    
                    }
                    
                    // Function to get browser version
                    function getBrowserVersion() {
    
                        return navigator.appVersion;
    
                    }
                    
                    // Function to get OS name
                    function getOSName() {
    
                        return navigator.platform;
    
                    }
                    
                    // Function to get OS version
                    function getOSVersion() {
    
                        return navigator.userAgent;
                        
                    }

        if (USERNAME.value && EMAIL.value && PASSWORD.value && DATE.value && TELEPHONE.value && COUNTRY.value) {

            DISPLAY(CREATEACCOUNTBUTTON,`
            
            <img class='LoadingIcon' src='${ICONS}loading.png'/>

            `);

            ADVANCE.GETPACKAGE(LOGINURL)

            .then((result) => {

                const user=result.find(user => user.Email===EMAIL.value);

                if (user) {
                    
                    DISPLAY(Message,`Email Is Taken`);

                    setTimeout(() => {
                       
                        DISPLAY(Message,``);

                        DISPLAY(CREATEACCOUNTBUTTON,`Create Account`)
                        
                    }, 2000);

                } else {

                    fetch(CREATEACCOUNTLINK,{
                        method:"POST",
                        mode:'no-cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(Users)
                    })

                    .then((result) => {

                        console.log(result);
                        
                        ADVANCE.GETPACKAGE(LOGINURL,'cors')

                        .then((result) => {

                            const user=result.find(user => user.Email===EMAIL.value );
                            
                            if (user) {

                                ADVANCE.ADDSTORAGE('local','User',user.SecretCode);  

                                HOMEPAGE(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS);
                                
                            } else {
                                
                                DISPLAY(Message,`User Not Found`);

                                setTimeout(() => {
                                
                                    DISPLAY(Message,``);

                                    DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                                    
                                }, 2000);

                            }

                        }).catch((err) => {

                            DISPLAY(Message,`Something Went Wrong`);

                                setTimeout(() => {
                                
                                    DISPLAY(Message,``);

                                    DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                                    
                                }, 2000);

                        });

                    }).catch((err) => {
                        
                        DISPLAY(Message,`Something Went Wrong`);

                                setTimeout(() => {
                                
                                    DISPLAY(Message,``);

                                    DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                                    
                                }, 2000);

                    });
                    
                }
              
                
            }).catch((err) => {
                console.log(err)
            });
            
        } else {
            
            DISPLAY(Message,`Fill All Parts`);

            setTimeout(() => {
               
                DISPLAY(Message,``);
                
            }, 2000);

        }

    })

}

export{CREATEACCOUNTPAGE}