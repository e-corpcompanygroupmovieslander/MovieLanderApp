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
