//POST DATA TO A SERVER
const POSTPACKAGE = (URL, MODE, TYPE, DATA, callback) => {
    fetch(URL, {
        method: 'POST',
        mode: MODE,
        body: JSON.stringify(DATA), // Assuming DATA is already a JSON object
    })
    .then(res => {
        if (TYPE === 'json') {
            return res.json(); // Return the parsed JSON
        } else {
            return res.text(); // Return the response body as text
        }
    })
    .then((data) => {
        callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it where you call POSTPACKAGE
    });
};
export{POSTPACKAGE}