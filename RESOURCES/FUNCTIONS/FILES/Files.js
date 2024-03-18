//CREATE FILES
const FILES = (callback) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
  
    fileInput.addEventListener('change', function() {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const fileData = event.target.result;
        callback(fileData); // Pass the file data to the callback function
      };
  
      reader.readAsDataURL(file); // Read file data as a data URL
    });
  
    fileInput.click();
};

export{FILES}