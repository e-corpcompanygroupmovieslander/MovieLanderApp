// Import statements for dependencies
import { ANDROIDLOGINPAGE } from "./LoginPage.js";
import { COUNTRYAPI } from "../../../APIS/IconsApi.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { LOGINAPI, DELETEACCOUNTGET } from "../../../APIS/Api.js";

// Function for the Android Forgot Password page
const ANDROIDFORGOTPASSWORD = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
    CLEAR(DIV);

    DISPLAY(DIV, `
        <!-- HTML content for the Android Forgot Password page -->
        <div class='AndroidHeader'>
            <img class='BackIcon' src='${ICONS}back.png'/>
            <h1 class='Payments'>Recover Password</h1>
        </div>
        <br><br><br>
        <h1 class='Message'></h1>
        <input type="text" id='UserNameHolder' placeholder="Enter UserName">
        <input type="email" id='EmailHolder' placeholder="Enter Email">
        <button class='SelectCountry'>
            <h1 class='SelectCountryName'>Select Country </h1>
            <img class='AppIcon1' src='${ICONS}location.png'/>
        </button>
        <button class='recover'>Recover Password</button>
        <div class='SelectCountryDiv'>
            <img class='CloseIcon' src='${ICONS}close.png'/>
            <br><br><br>
            <input type="text" id='SearchCountry' placeholder="Search For Country">
            <div class='CountryDiv'></div>
        </div>
        
    `);

    // Event listener for the back button
    const BACKICON = document.querySelector('.BackIcon');
    BACKICON.addEventListener('click', () => {
        sessionStorage.removeItem('Country');
        sessionStorage.removeItem('CountryCode');
        ANDROIDLOGINPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
    });

    // Selecting elements for interaction
    const MESSAGE = document.querySelector('.Message');
    const USERNAME = document.querySelector('#UserNameHolder');
    const EMAIL = document.querySelector('#EmailHolder');
    const LOCATION = document.querySelector('.SelectCountry');
    const SELECTCOUNTRYDIV = document.querySelector('.SelectCountryDiv');
    const SELECTDIV = document.querySelector('.CountryDiv');
    const CLOSEICON = document.querySelector('.CloseIcon');
    const SEARCHCOUNTRY = document.querySelector('#SearchCountry');

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
                        sessionStorage.setItem('CountryCode', element.phoneCode.replace(/\D/g, ''));  // Remove the '+' sign
                        STYLED(SELECTCOUNTRYDIV, 'height', '0');
                        DISPLAY(SelectCountryName, element.name);
                        DISPLAY(CountryCodeHolder, element.phoneCode);  // Include the '+' sign
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
    const LOGINBUTTON = document.querySelector('.recover');
    LOGINBUTTON.addEventListener('click', () => {
        if (USERNAME.value && EMAIL.value && sessionStorage.getItem('Country')) {
            DISPLAY(LOGINBUTTON, `<img id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);
            ADVANCE.GETPACKAGE(LOGINAPI, 'cors')
                .then((result) => {
                    const user = result.find(user => user.Email === EMAIL.value);

                    if (user) {
                        sessionStorage.setItem('user', user.SecretCode);
                        // Assuming DELETEACCOUNTGET returns a list of deleted accounts
                        ADVANCE.GETPACKAGE(DELETEACCOUNTGET, 'cors')
                            .then((deletedAccounts) => {
                                const deleted = deletedAccounts.find(deletedUser => deletedUser.User === sessionStorage.getItem('user'));

                                if (deleted) {
                                    ADVANCE.REMOVESTORAGE('local', 'User');
                                    DISPLAY(MESSAGE, 'User Does Not Exist');
                                    setTimeout(() => {
                                        DISPLAY(MESSAGE, '');
                                        DISPLAY(LOGINBUTTON, 'Recover');
                                    }, 2000);
                                } else {
                                    if (
                                        user.UserName === USERNAME.value &&
                                        user.Email === EMAIL.value &&
                                        user.Location === sessionStorage.getItem('Country')
                                    ) {
                                        alert(user.Password);
                                    } else {
                                        let errorMessage = 'Invalid Credentials:';
                                        if (user.UserName !== USERNAME.value) {
                                            errorMessage += ' Incorrect User Name';
                                        }
                                        if (user.Location !== sessionStorage.getItem('Country')) {
                                            errorMessage += ' Incorrect Country';
                                        }

                                        DISPLAY(MESSAGE, errorMessage);
                                        setTimeout(() => {
                                            DISPLAY(MESSAGE, '');
                                            DISPLAY(LOGINBUTTON, 'Recover');
                                        }, 2000);
                                    }
                                }
                            })
                            .catch((err) => {
                                DISPLAY(MESSAGE, 'Something went wrong');
                                setTimeout(() => {
                                    DISPLAY(MESSAGE, '');
                                    DISPLAY(LOGINBUTTON, 'Recover');
                                }, 2000);
                            });
                    } else {
                        DISPLAY(MESSAGE, `Email does not exist`);
                        setTimeout(() => {
                            DISPLAY(MESSAGE, '');
                            DISPLAY(LOGINBUTTON, 'Recover');
                        }, 2000);
                    }
                })
                .catch((err) => {
                    DISPLAY(MESSAGE, 'Something went wrong');
                    setTimeout(() => {
                        DISPLAY(MESSAGE, '');
                        DISPLAY(LOGINBUTTON, 'Recover');
                    }, 2000);
                });
        } else {
            DISPLAY(MESSAGE, 'Fill in all fields');
            setTimeout(() => {
                DISPLAY(MESSAGE, '');
            }, 2000);
        }
    });
};

export { ANDROIDFORGOTPASSWORD };
