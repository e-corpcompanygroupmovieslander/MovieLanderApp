const DIV=document.querySelector('div');

localStorage.setItem('Device','Web');

var themeColorMetaTag = document.getElementById('theme-color-meta');

// Now you can use the StatusBar API
let STATUSMODE = localStorage.getItem('ModeColour');
 
if (STATUSMODE) {
 
    DIV.style.background=STATUSMODE;

    themeColorMetaTag.setAttribute('content', STATUSMODE);
    
} else {
    
    DIV.style.background='#5C829A';

    themeColorMetaTag.setAttribute('content', '#5C829A');
    
}

setTimeout(() => {

    import("./START/AppStart.js").then((module) => {
        
        const { CONNECTION } = module;

        CONNECTION(DIV);

    });

}, 2000);