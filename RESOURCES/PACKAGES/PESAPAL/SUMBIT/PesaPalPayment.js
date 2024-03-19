//Sumbit Payment
const PESAPALSUMBITORDER=(TOKEN,ID,IPNID,SITE,callback)=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + TOKEN);

    var raw = JSON.stringify({
    "id":ID ,
    "currency": sessionStorage.getItem('Currency'),
    "amount": sessionStorage.getItem('Amount'),
    "description": "Movie Lander Subscription",
    "callback_url": SITE,
    "notification_id": IPNID,
    "billing_address": {
        "email_address": localStorage.getItem('Email'),
        "phone_number":"xxx" ,
        "country_code": "",
        "first_name": "xxx",
        "middle_name": "xxx",
        "last_name": "xx",
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

        localStorage.setItem('PaymentData',JSON.stringify(result));

        callback(result)

    })

    .catch(error => console.log('error', error));

}

export{PESAPALSUMBITORDER}