document.addEventListener('touchstart', function(event) {

    if (event.touches.length > 1) {

      event.preventDefault();

    }

  },

   { passive: false });

  document.addEventListener('wheel', function(event) {

    if ((event.ctrlKey || event.metaKey) && !event.shiftKey) {

      event.preventDefault();

    }
    
});

const DIV=document.querySelector('body');

// Now you can use the StatusBar API
let STATUSMODE = localStorage.getItem('ModeColour');

if (!STATUSMODE) {

  // Set default color if nothing is in localStorage
  STATUSMODE = '#5C829A'; // Replace with your default color

  localStorage.setItem('ModeColour', STATUSMODE); // Set default color in localStorage

}

// Set the background color of DIV
DIV.style.background = STATUSMODE;

localStorage.setItem('Device','Android');


setTimeout(() => {

import("./START/AppStart.js").then((module) => {
    
    const { CONNECTION } = module;

    CONNECTION(DIV);

});

}, 2000);