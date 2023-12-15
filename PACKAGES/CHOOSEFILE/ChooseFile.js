let CHOOSENFILE = null; // Global variable to store the chosen file content

const CHOOSEFILE = () => {
    return new Promise((resolve, reject) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';

        // Listen for the change event when the user selects a file
        fileInput.addEventListener('change', (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = () => {
                    // Store the file content in the global variable
                    CHOOSENFILE = reader.result;
                    // Create an object with file properties and content
                    const fileObject = {
                        name: selectedFile.name,
                        type: selectedFile.type,
                        size: selectedFile.size, // size in bytes
                        lastModified: selectedFile.lastModified, // timestamp
                        content: CHOOSENFILE
                    };
                    // Log the file object to the console
                    console.log('Selected File:', fileObject);
                    // Resolve the promise with the file object
                    resolve(fileObject);
                };
                reader.onerror = () => {
                    // Reject the promise if there was an error reading the file
                    reject(new Error('Error reading the file.'));
                };
                // Read the file as text
                reader.readAsText(selectedFile);
            } else {
                // Reject the promise if no file was selected
                reject(new Error('No file selected.'));
            }
        });

        // Trigger the file input dialog
        fileInput.click();
    });
};

export { CHOOSEFILE, CHOOSENFILE };
