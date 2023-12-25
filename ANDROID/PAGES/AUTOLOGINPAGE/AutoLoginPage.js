import { LOGINAPI, MTNPREMIUMPAYGET } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js";
import { ANDROIDCREATEPRIVACYPOLICYPAGE } from "../CREATEACCOUNTPRIVACYPOLICY/CreateAccountPrivacyPolicy.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";
import { ANDROIDLOGOUTPAGE } from "../LOGOUTPAGE/LogOutPage.js";

const ANDROIDAUTOLOGINPAGE = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
    // Check if User is logged in
    if (localStorage.getItem('User')) {
        // Check if AppPlayer is set
        if (localStorage.getItem('AppPlayer')) {
            ANDROIDHOMEPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
        } else {
            ANDROIDPLAYER(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
        }

        // Check if Privacy is accepted
        if (localStorage.getItem('Privacy')) {
            ANDROIDHOMEPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
        } else {
            ANDROIDCREATEPRIVACYPOLICYPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
        }

        // Fetch user data from the login API
        ADVANCE.GETPACKAGE(LOGINAPI, 'cors')
            .then((result) => {
                const users = result.find(user => user.SecretCode === localStorage.getItem('User'));

                if (users) {
                    // Save user session data
                    ADVANCE.ADDSTORAGE('Session', 'UserName', users.UserName);
                    ADVANCE.ADDSTORAGE('Session', 'UserEmail', users.Email);

                    // Save device name to local storage as UserDevice
                    const deviceName = navigator.userAgent;
                    ADVANCE.ADDSTORAGE('local', 'UserDevice', deviceName);

                    // Check if the device is the same as the last login
                    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=SdrYJC2OFjLVEBIVKaFCiXk5ETZJ1h-ZrCdw71Uqq7E8mI8Agq4ZSzgO6tNjidCSv_hnIOjBXNqfU2yM7tJ8UVDDdyWw_9bLm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHA7V_xHuqt_RHt2NgVI0hxOUNu_k4JAAcyGofLVo3kAuUX_2lfrRxs7ijmLAjMNdCTHOhoKW-IEsRN88vJOgl9Wj29LuqdMLtz9Jw9Md8uu&lib=MK6r_Kpo7IT2Bbfrm-N1YMezilWmV86UI')
                        .then(res => res.json())
                        .then((result) => {
                            const Device = result.find(user => user.User === localStorage.getItem('User') && user.Device === localStorage.getItem('UserDevice') && new Date(user.Date) >= new Date());

                            if (Device) {
                                // User and device match with a valid date, no action needed
                            } else {
                                CLEAR(DIV);

                                DISPLAY(DIV, `
                                    <h1 class='DeviceMessage'>This Account Is Running On Another Device LogOut To Continue</h1>
                                    <button class='logoutdevice'>LogOut</button>
                                `);

                                const LOGOUT_DEVICE = document.querySelector('.logoutdevice');

                                LOGOUT_DEVICE.addEventListener('click', () => {
                                    localStorage.setItem('DeviceMessage', 'TRUE');
                                    ANDROIDLOGOUTPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });

                    // Check if the user has a premium subscription
                    fetch(MTNPREMIUMPAYGET)
                        .then(res => res.json())
                        .then((result) => {
                            const Premiumed = result.find(user => user.User === localStorage.getItem('User') && new Date(user.ExpiryDate) >= new Date());

                            if (Premiumed) {
                                console.log('Premium On');
                                ADVANCE.ADDSTORAGE('local', 'Premium', 'TRUE');
                            } else {
                                console.log('Premium Expired');
                                ADVANCE.REMOVESTORAGE('local', 'Premium');
                            }

                            console.log(result);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    // User not found, clear all storage and show the login page
                    ADVANCE.REMOVESTORAGE('local', 'User');
                    ADVANCE.REMOVESTORAGE('local', 'Premium');
                    ADVANCE.REMOVESTORAGE('local', 'ParentalControlPin');
                    ADVANCE.REMOVESTORAGE('local', 'AppPlayer');
                    ADVANCE.REMOVESTORAGE('local', 'Privacy');
                    ADVANCE.DELETESTORAGE('');
                    ANDROIDLOGINPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        // User not found, clear all storage and show the login page
        ADVANCE.REMOVESTORAGE('local', 'User');
        ADVANCE.REMOVESTORAGE('local', 'Premium');
        ADVANCE.REMOVESTORAGE('local', 'ParentalControlPin');
        ADVANCE.REMOVESTORAGE('local', 'AppPlayer');
        ADVANCE.REMOVESTORAGE('local', 'Privacy');
        ADVANCE.DELETESTORAGE('');
        ANDROIDLOGINPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
    }
}

export { ANDROIDAUTOLOGINPAGE };
