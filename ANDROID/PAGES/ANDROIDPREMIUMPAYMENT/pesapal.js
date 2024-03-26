import { ICONSPATH } from "../../../APIS/IconsApi.js"
import { RANDOMCODE } from "../../../PACKAGES/RANDOMCODE/randomCode.js"
import { ANDROIDPREMIUMPAYMENT } from "./AndroidPremiumPayment.js"



const PESAPAL=()=>{

        //Set Environment
    const PESAPALENVIRONMENT=(TEXT)=>{

        if (TEXT) {

            localStorage.setItem('PesaPalEnvironment','Test')
            
        } else {
            localStorage.setItem('PesaPalEnvironment','Production') 
        }

        TOKEN()

    }

    //Create Token
    const TOKEN = () => {
        const raw = JSON.stringify({
            "consumer_key":'vvOhTSA4GBwtE6qkMuVq8hwNXMHOLxaO' ,
            "consumer_secret":"28GnlDzP3k/JkdAmUCgEkU8RD7k="
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

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {

                console.log(result);

                if (result.message==='Request processed successfully') {

                    setTimeout(() => {
                    
                        REGISTERIPN(result.token);
                        
                    }, 3000);

                } 
                
            })
            .catch(error => console.log('error', error));
    };

    RANDOMCODE(1234567890,(data)=>{
        
        sessionStorage.setItem('Site',data);
    })

    //Register IPN
    const REGISTERIPN = (TOKEN,) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + TOKEN);

        const raw = JSON.stringify({
            "url": 'https://www.e-corpcompanygroup'+sessionStorage.getItem('Site'),
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

                localStorage.setItem('id',result.id);

                console.log(result)

                if (result.status==='200') {

                    setTimeout(() => {
                    
                        setTimeout(() => {
                        
                            SUMBITORDER(TOKEN,result.id,result.ipn_id,)

                        }, 2000);
                        
                        
                    }, 2000);
    
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
        "currency": sessionStorage.getItem('Currency',),
        "amount": localStorage.getItem('Amount',),
        "description": "Movie Lander Subscription",
        "callback_url": localStorage.getItem('backurl'),
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

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {

            console.log(result)

            setTimeout(() => {

                if (result.redirect_url) {

                    localStorage.setItem('PaymentMessage',JSON.stringify(result))

                    localStorage.setItem('redirect',result.redirect_url);

                    if (result.redirect_url) {

                        open(result.redirect_url);
                        
                        /*
                        const PAYMEPAGE=document.querySelector('.PaymentPage');

                        PAYMEPAGE.style.display='block';

                        PAYMEPAGE.innerHTML=`
                        
                        <iframe src="${localStorage.getItem('redirect')}" frameborder="0" class='PaymentDisplay'></iframe>

                        <img class='closepayment' src='${ICONSPATH}close.png'/>

                        `

                        const CLOSEICON=document.querySelector('.closepayment');

                        const DetailsPage=document.querySelector('.DetailsPage');
                        
                        CLOSEICON.addEventListener('click',()=>{
                    
                            PAYMEPAGE.style.display='none';
                    
                            DetailsPage.style.display='none';
                             
                        })
                        */
                    
                    } else {
                        
                        DISPLAY(MESSAGE, 'Something Went Wrong');

                        const DetailsPage=document.querySelector('.DetailsPage');

                        PAYMEPAGE.style.display='none';
                    
                        DetailsPage.style.display='none';
                            
                    }

                    
                }
                
            }, 3000);

        })

        .catch(error => console.log('error', error));

    }

    PESAPALENVIRONMENT()

}


export{PESAPAL}