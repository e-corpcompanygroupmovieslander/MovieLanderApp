//Create Token
const PESAPALTOKEN = (CUSTOMERKEY, SECRETCODE,callback) => {
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


    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {

            callback(result);
            
        })
        .catch(error => console.log('error', error));
};

export{PESAPALTOKEN}