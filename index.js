const DIV=document.querySelector('div');

localStorage.setItem('Device','Web');

const themeColorMetaTag = document.getElementById('theme-color-meta');

// Now you can use the StatusBar API
let STATUSMODE = localStorage.getItem('ModeColour');
 
if (STATUSMODE) {
 
    DIV.style.background=STATUSMODE;

    themeColorMetaTag.setAttribute('content', '#ff5733');
    
} else {
    
    DIV.style.background='#5C829A';

    themeColorMetaTag.setAttribute('content', '#ff5733');
    
}

setTimeout(() => {

    import("./START/AppStart.js").then((module) => {
        
        const { CONNECTION } = module;

        CONNECTION(DIV);

    });

}, 2000);