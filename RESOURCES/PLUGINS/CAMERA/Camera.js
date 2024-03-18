//CAMERA PLUGIN
const CAMERA=()=>{

    Android.takePhoto();

    // Function to request camera permission and take a photo
function takePhotoAndDisplay() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Camera access not supported in this browser');
        return;
    }

    // Request camera permission
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            // Create video element to display camera stream
            var video = document.createElement('video');
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();

                // Create canvas element to capture photo
                var canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                var context = canvas.getContext('2d');

                // Draw video frame onto canvas
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Stop video stream
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });

                // Convert canvas data to base64 encoded JPEG image
                var imageData = canvas.toDataURL('image/jpeg');

                // Create img element to display captured image
                var img = document.createElement('img');
                img.src = imageData;
                img.style.maxWidth = '100%';

                // Append img element to the body
                document.body.appendChild(img);
            };
        })
        .catch(function (error) {
            console.error('Error accessing camera:', error);
        });
}

// Example usage:
takePhotoAndDisplay();

}
export{CAMERA}