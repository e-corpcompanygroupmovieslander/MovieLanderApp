//GET LOCAL STORAGE
const GETSTORE=(STORAGE,KEY)=>{

    if (STORAGE==='local') {
       
        localStorage.getItem(KEY);
        
    } else {
       
        sessionStorage.getItem(KEY);
        
    }

}

export{GETSTORE}