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

const DIV=document.querySelector('div');

localStorage.setItem('Device','Android');


setTimeout(() => {

    import("./START/AppStart.js").then((module) => {
        
        const { CONNECTION } = module;

        CONNECTION(DIV);

    });

}, 2000);