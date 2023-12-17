import { CREATEACCOUNTAPI, LOGINAPI } from "../../../APIS/Api.js";
import { ANDROIDCREATEPRIVACYPOLICYPAGE } from "../CREATEACCOUNTPRIVACYPOLICY/CreateAccountPrivacyPolicy.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

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

                    const firstLetter = EMAIL.value.charAt(0).toUpperCase();
                const birthYear = DATE.value.slice(-4); // Extract last 4 characters for the year
                
                // Calculate the length of the random string to make the total length 11
                const randomStringLength = 11 - 1 - 4; // 1 character for the first letter of email, 4 characters for the birth year
                
                // Generate the random string with the calculated length
                const randomString = generateRandomString(randomStringLength);
        
                // Ensure the total length of the secret code is 11
                const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
        
                const UserData={
                    "UserName":USERNAME.value,
                    "Email":EMAIL.value,
                    "Password":PASSWORD.value,
                    "Password2":PASSWORD.value,
                    "Date":DATE.value,
                    "Telephone":TELEPHONE.value,
                    "Location":LOCATION.value,
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

                    fetch(CREATEACCOUNTAPI,{
                        method:'POST',
                        mode:"no-cors",
                        body:JSON.stringify(UserData)
                    })

                    .then(res =>res.text())

                    .then(data=>{

                        ADVANCE.GETPACKAGE(LOGINAPI,'cors')

                        .then((result) => {
            
                            const users=result.find(user => user.Email===EMAIL.value);
            
                            if (users) {
            
                                if (users.Premium) {
                                    
                                    ADVANCE.ADDSTORAGE('local','Premium','TRUE');
            
                                } else {
                                    
                                    ADVANCE.REMOVESTORAGE('local','Premium');
                                }
                                
                                ADVANCE.ADDSTORAGE('local','User',users.SecretCode);
            
                                ANDROIDCREATEPRIVACYPOLICYPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
                                
                            } else {
                               
                                DISPLAY(MESSAGE,`User Doesnot Exist`);
            
                                setTimeout(() => {
                    
                                    DISPLAY(MESSAGE,``);
                    
                                    DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                                    
                                }, 2000);
                                
                            }
            
                        }).catch((err) => {
            
                            DISPLAY(MESSAGE,`SomeThing Went Wrong`);
            
                            setTimeout(() => {
            
                               DISPLAY(MESSAGE,``);
            
                               DISPLAY(CREATEACCOUNTBUTTON,`Create Account`);
                            
                            }, 2000);
            
                        });
                        

                    })

                    .catch(err=>console.log(err))

                }

                }).catch((err) => {

                    console.log(err)

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