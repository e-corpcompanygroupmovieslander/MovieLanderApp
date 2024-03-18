//ZOOM FUNCTION
const ZOOM=()=>{

    // Prevent default behavior for multi-touch and wheel events
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('wheel', function (event) {
        if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {
            event.preventDefault();
        }
    });

}

export{ZOOM}