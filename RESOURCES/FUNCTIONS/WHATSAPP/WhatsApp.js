//OPEN WHATSAPP
const WHATSAPP=(phoneNumber) => {
    var whatsappLink = 'https://wa.me/' + encodeURIComponent(phoneNumber);
    window.open(whatsappLink);
}

export{WHATSAPP}