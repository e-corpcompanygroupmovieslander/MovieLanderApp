/*
const APPMODE=(DIV,ADVANCE,ADD,DISPLAY,CLEAR,ICONS)=>{

    
    if (localStorage.getItem('Mode')==='Dark') {
      
        DIV.style.background='#212121';
    
    
    
    } else {
        
        DIV.style.background='#5C829A';
    
        
    }

    
     
 

}

export{APPMODE}



//SET DEVICE STORAGE FOR EASY MONITORING AND UPDATING
     localStorage.setItem('Device','Android');

     // Now you can use the StatusBar API
     let STATUSMODE = localStorage.getItem('ModeColour');
 
     if (STATUSMODE) {
      
         DIV.style.background=STATUSMODE;
         
     } else {
         
         DIV.style.background='#5C829A';
         
     }
 
     // Set default color if nothing is in localStorage
     if (!STATUSMODE) {
         STATUSMODE = '#5C829A'; // Replace with your default color
        
     }
 
     // Set the status bar to a specific color
     StatusBar.backgroundColorByHexString(STATUSMODE);

     */