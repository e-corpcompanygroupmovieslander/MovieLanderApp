//REMOVE LOCAL STORAGE
const REMOVESTORE=(STORAGE,KEY)=>{

    if (STORAGE==='local') {
       
        localStorage.removeItem(KEY);
        
    } else {
       
        sessionStorage.removeItem(KEY);
        
    }

}

export{REMOVESTORE}