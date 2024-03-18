//OPEN YOUTUBE
const YOUTUBE = (query) => {
    var youtubeLink = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    window.open(youtubeLink);
}

export{YOUTUBE}