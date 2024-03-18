//EXTERNAL JS
const EXTERNALJS = (PATH, callback) => {
    // Create a new script element
    var script = document.createElement('script');

    // Set the source attribute to your JavaScript file
    script.src = PATH;

    // Optionally, you can set other attributes if needed
    script.async = true; // Set async attribute to load asynchronously
    script.onload = function() {
        // Code to execute after the script has loaded (optional)
        console.log('Script loaded successfully');
        // If a callback function is provided, call it
        if (typeof callback === 'function') {
            callback();
        }
    };

    // Append the script element to the head of the document
    document.head.appendChild(script);

};

export{EXTERNALJS}