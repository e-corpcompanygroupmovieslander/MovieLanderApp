//OPEN GMAIL
const GMAIL = (emailAddress) => {
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
    window.open(mailtoLink);
}

export{GMAIL}