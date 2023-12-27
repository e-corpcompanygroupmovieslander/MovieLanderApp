// Import statements for APIs and dependencies
import { CREATEACCOUNTAPI, LOGINAPI, MTNPREMIUMPAYGET } from "../../../APIS/Api.js";
import { COUNTRYAPI } from "../../../APIS/IconsApi.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDCREATEPRIVACYPOLICYPAGE } from "../CREATEACCOUNTPRIVACYPOLICY/CreateAccountPrivacyPolicy.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

// Function to generate a random string of a given length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Main function for the Android create account page
const ANDROIDCREATEACCOUNTPAGE = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
    // Clear the specified DIV
    CLEAR(DIV);

    // Display the HTML content for the create account page
    DISPLAY(DIV, `
        <h1 class='AppName'>Movie Lander</h1>
        <h1 class='Message'></h1>
        <input type="text" id='UserNameHolder' placeholder="Enter UserName">
        <input type="email" id='EmailHolder' placeholder="Enter Email">
        <input type="password" id='PasswordHolder' placeholder="Enter Password">
        <input type="text" id='DateHolder' placeholder="Enter Date Of Birth">
        <button class='SelectCountry'>
            <h1 class='SelectCountryName'>Select Country </h1>
            <img class='AppIcon1' src='${ICONS}location.png'/>
        </button>
        <div class='telephoneDiv'>
            <h1 id='CountryCodeHolder' class='SelectCountryName'>+</h1>
            <input type="tel" id="TelephoneHolder" placeholder="Enter Telephone Number" minlength="9" maxlength="10">
        </div>
        <button class='CreateUserAccountButton'>Create Account</button>
        <button class='LogInAccountButton'>LogIn</button>
        <div class='SelectCountryDiv'>
            <img class='CloseIcon' src='${ICONS}close.png'/>
            <br><br><br>
            <input type="text" id='SearchCountry' placeholder="Search For Country">
            <div class='CountryDiv'></div>  
        </div>
    `);

    // Selecting elements for interaction
    const MESSAGE = document.querySelector('.Message');
    const USERNAME = document.querySelector('#UserNameHolder');
    const EMAIL = document.querySelector('#EmailHolder');
    const DATE = document.querySelector('#DateHolder');
    const PASSWORD = document.querySelector('#PasswordHolder');
    const TELEPHONE = document.querySelector('#TelephoneHolder');
    const LOCATION = document.querySelector('.SelectCountry');
    const CREATEACCOUNTBUTTON = document.querySelector('.CreateUserAccountButton');
    const SELECTCOUNTRYDIV = document.querySelector('.SelectCountryDiv');
    const SELECTDIV = document.querySelector('.CountryDiv');
    const CLOSEICON = document.querySelector('.CloseIcon');
    const SEARCHCOUNTRY = document.querySelector('#SearchCountry');

      // Event listener for displaying date picker on click
      DATE.addEventListener('click', () => {
        DATE.type = 'date';
    });

    // Event listener for closing the country selection dialog
    CLOSEICON.addEventListener('click', () => {
        STYLED(SELECTCOUNTRYDIV, 'height', '0');
    });

    // Event listener for opening the country selection dialog
    LOCATION.addEventListener('click', () => {
        // Styling based on the mode colour
        if (localStorage.getItem('ModeColour') === '#5C829A') {
            STYLED(SELECTCOUNTRYDIV, 'background', '#5C829A');
        } else {
            STYLED(SELECTCOUNTRYDIV, 'background', '#212121');
        }

        STYLED(SELECTCOUNTRYDIV, 'height', '100%');

        // Display loading icon while fetching countries
        DISPLAY(SELECTDIV, `
            <img id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
        `);

        const SelectCountryName = document.querySelector('.SelectCountryName');
        const CountryCodeHolder = document.querySelector('#CountryCodeHolder');

        // Fetch countries and populate the selection dialog
        ADVANCE.GETPACKAGE(COUNTRYAPI, 'cors')
            .then(data => {
                CLEAR(SELECTDIV);
                data.forEach(element => {
                    const CountryHolder = document.createElement('button');
                    CountryHolder.classList.add('SelectCountryPicker');
                    CountryHolder.innerHTML = `<h1 class='SelectCountryName'>${element.name}</h1>` +
                        `<h1 class='countrycode'>${element.phoneCode}</h1>`;

                    // Event listener for selecting a country
                    CountryHolder.addEventListener('click', () => {
                        sessionStorage.setItem('Country', element.name);
                        sessionStorage.setItem('CountryCode', element.phoneCode);
                        STYLED(SELECTCOUNTRYDIV, 'height', '0');
                        DISPLAY(SelectCountryName, element.name);
                        DISPLAY(CountryCodeHolder, element.phoneCode);
                    });

                    // Event listener for searching countries
                    SEARCHCOUNTRY.addEventListener('input', () => {
                        const searchValue = SEARCHCOUNTRY.value.trim().toLowerCase();
                        const countryHolders = document.querySelectorAll('.SelectCountryPicker');
                        countryHolders.forEach(countryHolder => {
                            const countryName = countryHolder.innerHTML.toLowerCase();
                            if (countryName.includes(searchValue)) {
                                countryHolder.style.display = 'inline-flex';
                            } else {
                                countryHolder.style.display = 'none';
                            }
                        });
                    });

                    // Add the country button to the dialog
                    ADD(SELECTDIV, CountryHolder);
                });
            })
            .catch(err => console.log(err));
    });

    // Event listener for navigating to login page
    const LOGINBUTTON = document.querySelector('.LogInAccountButton');
    LOGINBUTTON.addEventListener('click', () => {
        sessionStorage.removeItem('Country');
        sessionStorage.removeItem('CountryCode');
        ANDROIDLOGINPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
    });

    // Event listener for creating a user account
    CREATEACCOUNTBUTTON.addEventListener('click', () => {
        if (USERNAME.value && EMAIL.value && PASSWORD.value && DATE.value && TELEPHONE.value && sessionStorage.getItem('Country')) {
            // Validate phone number format
            const phoneRegex = /^\d{7,10}$/;
            if (!phoneRegex.test(TELEPHONE.value)) {
                DISPLAY(MESSAGE, `Please enter a valid phone number`);
                setTimeout(() => {
                    DISPLAY(MESSAGE, ``);
                }, 2000);
                return; // Stop further processing if the phone number is invalid
            }

            // Validate date of birth
            const dob = new Date(DATE.value);
            const currentDate = new Date();
            const ageDiffMs = currentDate - dob;
            const ageDate = new Date(ageDiffMs);
            const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

            if (userAge < 13) {
                DISPLAY(MESSAGE, `Your under Age,Check your Date Of Birth`);
                setTimeout(() => {
                    DISPLAY(MESSAGE, ``);
                }, 2000);
                return; // Stop further processing if the user is younger than 13
            }

            // Validate password criteria
            const passwordValue = PASSWORD.value.trim();
            const containsNumber = /\d/.test(passwordValue);
            const containsAlphabet = /[a-zA-Z]/.test(passwordValue);

            if (passwordValue.length < 6) {
                DISPLAY(MESSAGE, `Password must be at least 6 characters long`);
                setTimeout(() => {
                    DISPLAY(MESSAGE, ``);
                    DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                }, 2000);
            } else if (!containsNumber) {
                DISPLAY(MESSAGE, `Password must contain at least one number`);
                setTimeout(() => {
                    DISPLAY(MESSAGE, ``);
                    DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                }, 2000);
            } else if (!containsAlphabet) {
                DISPLAY(MESSAGE, `Password must contain at least one alphabet character`);
                setTimeout(() => {
                    DISPLAY(MESSAGE, ``);
                    DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                }, 2000);
            } else {
                // Password meets the criteria

                const emailValue = EMAIL.value.trim();
                const gmailRegex = /@gmail\.com$/;

                if (gmailRegex.test(emailValue) && !/\s/.test(emailValue)) {
                    DISPLAY(CREATEACCOUNTBUTTON, `
                        <img id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
                    `);

                    ADVANCE.GETPACKAGE(LOGINAPI, 'cors')
                        .then((result) => {
                            const users = result.find(user => user.Email === EMAIL.value);

                            if (users) {
                                DISPLAY(MESSAGE, `User Email Taken`);
                                setTimeout(() => {
                                    DISPLAY(MESSAGE, ``);
                                    DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                                }, 2000);
                            } else {
                                const firstLetter = EMAIL.value.charAt(0).toUpperCase();
                                const birthYear = DATE.value.slice(-4);
                                const randomStringLength = 11 - 1 - 4;
                                const randomString = generateRandomString(randomStringLength);
                                const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);

                                const UserData = {
                                    "UserName": USERNAME.value,
                                    "Email": EMAIL.value,
                                    "Password": PASSWORD.value,
                                    "Password2": PASSWORD.value,
                                    "Date": DATE.value,
                                    "Telephone": sessionStorage.getItem('CountryCode') + TELEPHONE.value,
                                    "Location": sessionStorage.getItem('Country'),
                                    "CreatedOn": new Date(),
                                    "SecretCode": secretCode,
                                    "Premium": "TRUE",
                                    "AppVersion": '7.9',
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

                                // Functions to get browser and OS information
                                function getBrowserName() { return navigator.appName; }
                                function getBrowserVersion() { return navigator.appVersion; }
                                function getOSName() { return navigator.platform; }
                                function getOSVersion() { return navigator.userAgent; }

                                fetch(CREATEACCOUNTAPI, {
                                    method: 'POST',
                                    mode: "no-cors",
                                    body: JSON.stringify(UserData)
                                })
                                    .then(res => res.text())
                                    .then(data => {
                                        ADVANCE.GETPACKAGE(LOGINAPI, 'cors')
                                            .then((result) => {
                                                const users = result.find(user => user.Email === EMAIL.value);
                                                if (users) {

                                                   //CHECK FOR PREMIUM
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
                                                    // Save device name to local storage as UserDevice
                                                    const deviceName = navigator.userAgent;
                                                    ADVANCE.ADDSTORAGE('local', 'UserDevice', deviceName);
                                                    ADVANCE.ADDSTORAGE('Session','UserName',users.UserName);
                                                    ADVANCE.ADDSTORAGE('Session','UserEmail',users.Email);
                                                    ADVANCE.ADDSTORAGE('local', 'User', users.SecretCode);
                                                    ANDROIDCREATEPRIVACYPOLICYPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);

                                                    

                                                } else {
                                                    DISPLAY(MESSAGE, `User Does not Exist`);
                                                    setTimeout(() => {
                                                        DISPLAY(MESSAGE, ``);
                                                        DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                                                    }, 2000);
                                                }
                                            })
                                            .catch((err) => {
                                                DISPLAY(MESSAGE, `Something Went Wrong`);
                                                setTimeout(() => {
                                                    DISPLAY(MESSAGE, ``);
                                                    DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                                                }, 2000);
                                            });
                                    })
                                    .catch(err => console.log(err));
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            DISPLAY(MESSAGE, `Something Went Wrong`);
                            setTimeout(() => {
                                DISPLAY(MESSAGE, ``);
                                DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                            }, 2000);
                        });
                } else {
                    DISPLAY(MESSAGE, `Invalid email format`);
                    setTimeout(() => {
                        DISPLAY(MESSAGE, ``);
                        DISPLAY(CREATEACCOUNTBUTTON, `Create Account`);
                    }, 2000);
                }
            }
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
        }
    });
};

// Export the function for external use
export { ANDROIDCREATEACCOUNTPAGE };
