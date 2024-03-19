//Register IPN
const PESAPALREGISTERIPN = (TOKEN,IPNURL,callback) => {

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + TOKEN);

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

            callback(result,TOKEN);
            
        })
        .catch(error => console.log('error', error));
};

export{PESAPALREGISTERIPN}