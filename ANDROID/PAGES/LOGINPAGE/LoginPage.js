import { LOGINAPI } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js";
import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";

const ANDROIDLOGINPAGE = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
    CLEAR(DIV);

    DISPLAY(DIV, `
        <h1 class='AppName'>Movie Lander</h1>
        <h1 class='Message'></h1>
        <input type="email" id='EmailHolder' placeholder="Enter Email">
        <input type="password" id='PasswordHolder' placeholder="Enter Password">
        <button class='LogInButton'>LogIn</button>
        <button class='CreateAccountButton'>Create Account</button>
    `);

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
                        if (user.Password === PASSWORD.value) {
                            if (user.Premium) {
                                ADVANCE.ADDSTORAGE('local', 'Premium', 'TRUE');
                            } else {
                                ADVANCE.REMOVESTORAGE('local', 'Premium');
                            }

                            ADVANCE.ADDSTORAGE('local', 'Privacy', 'TRUE');
                            ADVANCE.ADDSTORAGE('local', 'User', user.SecretCode);

                            ANDROIDPLAYER(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
                        } else {
                            DISPLAY(MESSAGE, `Wrong password`);

                            setTimeout(() => {
                                DISPLAY(MESSAGE, '');
                                DISPLAY(LOGINBUTTON, 'LogIn');
                            }, 2000);
                        }
                    } else {
                        DISPLAY(MESSAGE, `Email does not exist`);

                        setTimeout(() => {
                            DISPLAY(MESSAGE, '');
                            DISPLAY(LOGINBUTTON, 'LogIn');
                        }, 2000);
                    }
                })
                .catch((err) => {
                    DISPLAY(MESSAGE, 'Something went wrong');

                    setTimeout(() => {
                        DISPLAY(MESSAGE, '');
                        DISPLAY(LOGINBUTTON, 'LogIn');
                    }, 2000);
                });
        } else {
            DISPLAY(MESSAGE, 'Fill in all fields');

            setTimeout(() => {
                DISPLAY(MESSAGE, '');
            }, 2000);
        }
    });

    const CREATEACCOUNTBUTTON = document.querySelector('.CreateAccountButton');

    CREATEACCOUNTBUTTON.addEventListener('click', () => {
        ANDROIDCREATEACCOUNTPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
    });
};

export { ANDROIDLOGINPAGE };
