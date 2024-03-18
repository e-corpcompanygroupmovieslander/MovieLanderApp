//PASSWORD HARSH
const PASSWORDHASH = async (password, callback) => {
    try {
        // Convert password string to ArrayBuffer
        const encoder = new TextEncoder();
        const data = encoder.encode(password);

        // Hash password using SHA-256 algorithm
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);

        // Convert ArrayBuffer to hex string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        // Invoke the callback with the hashed password
        callback(hashHex);
    } catch (error) {
        // If any error occurs, alert the error
        alert(error);
    }
};

export{PASSWORDHASH}