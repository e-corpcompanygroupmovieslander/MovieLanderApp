import { DELETEACCOUNTGET, LOGINAPI, MTNPREMIUMPAYGET } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js";
import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDFORGOTPASSWORD } from "./FogotPassword.js";

const ANDROIDLOGINPAGE = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {

    CLEAR(DIV);

    DISPLAY(DIV, `
        <h1 class='AppName'>Movie Lander</h1>
        <h1 class='Message'></h1>
        <input type="email" id='EmailHolder' placeholder="Enter Email">
        <input type="password" id='PasswordHolder' placeholder="Enter Password">
        <h1 class='ForgotPassword'>Forgot Password</h1>
        <button class='LogInButton'>LogIn</button>
        <button class='CreateAccountButton'>Create Account</button>
    `);

    const FORGOTPASSWORD=document.querySelector('.ForgotPassword')

    FORGOTPASSWORD.addEventListener('click',()=>{

        ANDROIDFORGOTPASSWORD(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);

    })

    const LOGINBUTTON = document.querySelector('.LogInButton');

    LOGINBUTTON.addEventListener('click', () => {
        const EMAIL = document.querySelector('#EmailHolder');
        const PASSWORD = document.querySelector('#PasswordHolder');
        const MESSAGE = document.querySelector('.Message');

        if (EMAIL.value && PASSWORD.value) {
            DISPLAY(LOGINBUTTON, `<img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);

            ADVANCE.GETPACKAGE(LOGINAPI, 'cors')
                .then((result) => {
                    const user = result.find(user => user.Email === EMAIL.value);

                    if (user) {
                        // Assuming DELETEACCOUNTGET returns a list of deleted accounts
                        ADVANCE.GETPACKAGE(DELETEACCOUNTGET, 'cors')
                            .then((deletedAccounts) => {
                                const deleted = deletedAccounts.find(deletedUser => deletedUser.User === user.SecretCode);

                                if (deleted) {
                                    ADVANCE.REMOVESTORAGE('local', 'User');

                                    DISPLAY(MESSAGE, 'User Does Not Exist');

                                    setTimeout(() => {
                                        DISPLAY(MESSAGE, '');
                                        DISPLAY(LOGINBUTTON, 'LogIn');
                                    }, 2000);
                                } else {
                                    if (user.Password === PASSWORD.value) {
                                        //CHECK FOR PREMIUM
                                        fetch(MTNPREMIUMPAYGET)
                                            .then(res => res.json())
                                            .then((result) => {
                                                const Premiumed = result.find(user => user.User === localStorage.getItem('User') && new Date(user.ExpiryDate) >= new Date());
                                                if (Premiumed) {
                                                    
                                                    ADVANCE.ADDSTORAGE('local', 'Premium', 'TRUE');
                                                } else {
                                                    
                                                    ADVANCE.REMOVESTORAGE('local', 'Premium');
                                                }
                                                
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });

                                        // Save device name to local storage as UserDevice
                                        const deviceName = navigator.userAgent;
                                        ADVANCE.ADDSTORAGE('local', 'UserDevice', deviceName);

                                        //Send data To database
                                        const LOGGEDINDATA={
                                            "User":user.SecretCode,
                                            "Device":localStorage.getItem('UserDevice'),
                                            "Date":new Date(),
                                        }

                                        fetch('https://script.google.com/macros/s/AKfycbyAcmACiGB_9snZ0eClLSSPP-gRFsvERRvdHxCbfg7s8XbpRAsQD89spq7asP9ZvsgUTA/exec',{
                                            method:"POST",
                                            mode:'no-cors',
                                            body:JSON.stringify(LOGGEDINDATA)
                                        })

                                        .then(res=>res.json())

                                        .then((result) => {
                                            
                                            fetch('https://script.googleusercontent.com/macros/echo?user_content_key=SdrYJC2OFjLVEBIVKaFCiXk5ETZJ1h-ZrCdw71Uqq7E8mI8Agq4ZSzgO6tNjidCSv_hnIOjBXNqfU2yM7tJ8UVDDdyWw_9bLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHA7V_xHuqt_RHt2NgVI0hxOUNu_k4JAAcyGofLVo3kAuUX_2lfrRxs7ijmLAjMNdCTHOhoKW-IEsRN88vJOgl9Wj29LuqdMLtz9Jw9Md8uu&lib=MK6r_Kpo7IT2Bbfrm-N1YMezilWmV86UI')

                                            .then(res=>res.json())

                                            .then((result) => {
                                               //Do the
                                            }).catch((err) => {
                                                console.log(err)
                                            });
                                            
                                        }).catch((err) => {
                                            console.log(err)
                                        });

                                        localStorage.removeItem('DeviceMessage');

                                        ADVANCE.ADDSTORAGE('Session', 'UserName', user.UserName);
                                        ADVANCE.ADDSTORAGE('Session', 'UserEmail', user.Email);
                                        ADVANCE.ADDSTORAGE('local', 'Privacy', 'TRUE');
                                        ADVANCE.ADDSTORAGE('local', 'User', user.SecretCode);

                                        if (localStorage.getItem('AppPlayer')) {
                                            ANDROIDPLAYER(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);   
                                        } else {
                                            ANDROIDHOMEPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE)
                                        }
                                        
                                    } else {
                                        if ('vibrate' in navigator) {

                                            navigator.vibrate(200);
                        
                                            DISPLAY(MESSAGE, 'Wrong User Password');
                            
                                            setTimeout(() => {
                                                DISPLAY(MESSAGE, '');
                                                DISPLAY(LOGINBUTTON, 'LogIn');
                                            }, 2000)
                                            // Vibrate for 200 milliseconds
                                            
                                          } else {
                        
                                            DISPLAY(MESSAGE, 'Wrong User Password');
                            
                                            setTimeout(() => {
                                                DISPLAY(MESSAGE, '');
                                                DISPLAY(LOGINBUTTON, 'LogIn');
                                            }, 2000)
                                        }
                                    }
                                }
                            })
                            .catch((err) => {
                                if ('vibrate' in navigator) {

                                    navigator.vibrate(200);
                
                                    DISPLAY(MESSAGE, 'Something Went Wrong');
                    
                                    setTimeout(() => {
                                        DISPLAY(MESSAGE, '');
                                        DISPLAY(LOGINBUTTON, 'LogIn');
                                    }, 2000)
                                    // Vibrate for 200 milliseconds
                                    
                                  } else {
                
                                    DISPLAY(MESSAGE, 'Something Went Wrong');
                    
                                    setTimeout(() => {
                                        DISPLAY(MESSAGE, '');
                                        DISPLAY(LOGINBUTTON, 'LogIn');
                                    }, 2000)
                                }
                            });
                    } else {

                        if ('vibrate' in navigator) {

                            navigator.vibrate(200);
        
                            DISPLAY(MESSAGE, 'Email does not exist');
            
                            setTimeout(() => {
                                DISPLAY(MESSAGE, '');
                                DISPLAY(LOGINBUTTON, 'LogIn');
                            }, 2000)
                            // Vibrate for 200 milliseconds
                            
                          } else {
        
                            DISPLAY(MESSAGE, 'Email does not exist');
            
                            setTimeout(() => {
                                DISPLAY(MESSAGE, '');
                                DISPLAY(LOGINBUTTON, 'LogIn');
                            }, 2000)
                        }
                        
                    }
                })
                .catch((err) => {

                    if ('vibrate' in navigator) {

                        navigator.vibrate(200);
    
                        DISPLAY(MESSAGE, 'Something Went Wrong');
        
                        setTimeout(() => {
                            DISPLAY(MESSAGE, '');
                        }, 2000)
                        // Vibrate for 200 milliseconds
                        
                      } else {
    
                        DISPLAY(MESSAGE, 'Something Went Wrong');
        
                        setTimeout(() => {
                            DISPLAY(MESSAGE, '');
                        }, 2000)
                    }

                });
        } else {

            if (localStorage.getItem('Device')==='Web') {
       
                DISPLAY(MESSAGE, 'Fill in all fields');
    
                    setTimeout(() => {
                        DISPLAY(MESSAGE, '');
                }, 2000)
                
            } else {
              
                if ('vibrate' in navigator) {

                    navigator.vibrate(200);

                    DISPLAY(MESSAGE, 'Fill in all fields');
    
                    setTimeout(() => {
                        DISPLAY(MESSAGE, '');
                    }, 2000)
                    // Vibrate for 200 milliseconds
                    
                  } else {

                    DISPLAY(MESSAGE, 'Fill in all fields');
    
                    setTimeout(() => {
                        DISPLAY(MESSAGE, '');
                    }, 2000)
                }
        
            }
        

           
           ;
        }
    });

    const CREATEACCOUNTBUTTON = document.querySelector('.CreateAccountButton');

    CREATEACCOUNTBUTTON.addEventListener('click', () => {
        ANDROIDCREATEACCOUNTPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
    });
};

export { ANDROIDLOGINPAGE };