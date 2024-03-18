//MODULES
const MODULE = (PATH, MODULE_NAME, callback) => {
    import(PATH).then(module => {
        callback(module[MODULE_NAME]); // Pass the imported function to the callback function
    }).catch(error => {
        console.error('Error importing module:', error);
    });
};

export{MODULE}