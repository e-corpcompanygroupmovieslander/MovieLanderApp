const POSTPACKAGE = (URL, POSTDATA, MODE) => {
    const formData = new FormData();

    // Check if POSTDATA is an object
    if (typeof POSTDATA === 'object' && POSTDATA !== null) {
        // Check if POSTDATA is a FormData object
        if (POSTDATA instanceof FormData) {
            formData = POSTDATA;
        } else {
            // Assume it's JSON data
            for (const key in POSTDATA) {
                // If the value is a File object, append it to the FormData
                if (POSTDATA[key] instanceof File) {
                    formData.append(key, POSTDATA[key]);
                } else {
                    // Otherwise, treat it as a regular form field
                    formData.append(key, POSTDATA[key]);
                }
            }
        }
    } else {
        throw new Error('POSTDATA must be an object or FormData');
    }

    return fetch(URL, {
        method: 'POST',
        mode: MODE,
        body: formData,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Check if the response content type is JSON
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            } else {
                // If not JSON, return the response text
                return response.text();
            }
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
            throw error; // Re-throw the error to handle it where you call POSTPACKAGE
        });
};

export { POSTPACKAGE };