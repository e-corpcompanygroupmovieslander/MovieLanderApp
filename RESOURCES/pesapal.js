//Set Environment
const PESAPALENVIRONMENT=(TEXT)=>{

    if (TEXT) {

        localStorage.setItem('PesaPalEnvironment','Test')
        
    } else {
        localStorage.setItem('PesaPalEnvironment','Production') 
    }

}

//Create Token
const TOKEN = (CUSTOMERKEY, SECRETCODE,IPNSITE) => {
    const raw = JSON.stringify({
        "consumer_key": CUSTOMERKEY,
        "consumer_secret": SECRETCODE
    });

    const BUSINESSURL = `https://pay.pesapal.com/v3/api/Auth/RequestToken`;
    const TESTURL = `https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken`;

    const url = localStorage.getItem('PesaPalEnvironment') === 'Production' ? BUSINESSURL : TESTURL;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    MESSAGE('','Generating Payment Token','1000');

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {

            if (result.message==='Request processed successfully') {

                MESSAGE('','Token Generated Successfully','');

                setTimeout(() => {
                   
                    REGISTERIPN(result.token,IPNSITE);
                    
                }, 3000);

            } else {
               
                MESSAGE('','Token Generated Failed,Try Again','');
                
            }
            
        })
        .catch(error => console.log('error', error));
};

//Register IPN
const REGISTERIPN = (TOKEN,IPNURL,) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + TOKEN);

    MESSAGE('','Generating Payment Id','1000')

    const raw = JSON.stringify({
        "url": IPNURL,
        "ipn_notification_type": "GET",
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: "cors"
    };

    const BUSINESSURL = `https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN`;
    const TESTURL = `https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN`;

    const url = localStorage.getItem('PesaPalEnvironment') === 'Production' ? BUSINESSURL : TESTURL;

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {

            console.log(result)

            if (result.status==='200') {

                setTimeout(() => {
                 
                    MESSAGE('','Payment Id Generated Successfully','1000');

                    setTimeout(() => {
                    
                        SUMBITORDER(TOKEN,result.id,result.ipn_id,)

                    }, 2000);
                    
                    
                }, 2000);
  
            } else {
               
                MESSAGE('','Token Generated Failed,Try Again','');
                
            }
            
        })
        .catch(error => console.log('error', error));
};

//Sumbit Payment
const SUMBITORDER=(TOKEN,ID,IPNID,)=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + TOKEN);

    var raw = JSON.stringify({
    "id":ID ,
    "currency": localStorage.getItem('Currency'),
    "amount": sessionStorage.getItem('PesaAmount'),
    "description": "Movie Lander Subscription",
    "callback_url": sessionStorage.getItem('RedirectSite'),
    "notification_id": IPNID,
    "billing_address": {
        "email_address": localStorage.getItem('Email'),
        "phone_number":"" ,
        "country_code": "",
        "first_name": "",
        "middle_name": "",
        "last_name": "",
        "line_1": "",
        "line_2": "",
        "city": "",
        "state": "",
        "postal_code": null,
        "zip_code": null
    }
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const BUSINESSURL = `https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest`;
    const TESTURL = `https://cybqa.pesapal.com/pesapalv3/api/Transactions/SubmitOrderRequest`;

    const url = localStorage.getItem('PesaPalEnvironment') === 'Production' ? BUSINESSURL : TESTURL;

    MESSAGE('','Please Wait While We Process Payment','1000');

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {

        console.log(result)

        LOADER();

        setTimeout(() => {

            if (result.redirect_url) {

                STORE('local','paymentData',JSON.stringify(result));

                WEBVIEW(result.redirect_url);
               
            }
            
        }, 3000);

    })

    .catch(error => console.log('error', error));

}

/*
const linkElement = document.createElement('link');
    linkElement.rel = 'manifest';
    linkElement.href = './manifest.json';
    document.head.appendChild(linkElement);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
        .then((registration) => {
            //console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
           // console.error('Service Worker registration failed:', error);
        });
    }
*/