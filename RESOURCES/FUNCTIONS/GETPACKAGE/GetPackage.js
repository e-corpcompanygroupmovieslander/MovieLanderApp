//FETCH DATA FROM A SERVER
const GETPACKAGE = (URL, MODE, callback) => {
    fetch(URL, {
        method: "GET",
        mode: MODE
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            return response.json(); // Return parsed JSON data
        } else {
            return response.text(); // Return response text
        }
    })
    .then((data) => {
        callback(data); // Call the callback function with the fetched data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; // Re-throw the error to handle it where you call GETPACKAGE
    });
};
export{GETPACKAGE}