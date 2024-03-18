//DEHARSH PASSWORD
const PASSWORDDEHASH = async (hashedPassword, inputPassword, callback) => {
    try {
        // Convert input password string to ArrayBuffer
        const encoder = new TextEncoder();
        const inputData = encoder.encode(inputPassword);

        // Hash the input password using SHA-256 algorithm
        const inputHashBuffer = await crypto.subtle.digest('SHA-256', inputData);

        // Convert ArrayBuffer to hex string
        const inputHashArray = Array.from(new Uint8Array(inputHashBuffer));
        const inputHashHex = inputHashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        // Compare the hashed input password with the stored hashed password
        const match = hashedPassword === inputHashHex;

        // Invoke the callback with the result
        callback(match);
    } catch (error) {
        // If any error occurs, alert the error
        alert(error);
    }
};

export{PASSWORDDEHASH}