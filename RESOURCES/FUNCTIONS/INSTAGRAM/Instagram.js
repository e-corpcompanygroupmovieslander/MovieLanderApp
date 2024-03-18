//OPEN INSTAGRAME
const INSTAGRAM = (username) => {
    var instagramLink = 'https://www.instagram.com/' + encodeURIComponent(username);
    window.open(instagramLink);
}

export{INSTAGRAM}