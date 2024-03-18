//DELETE LOCAL STORAGE
const DELETESTORE=(STORAGE,KEY)=>{

    if (STORAGE==='local') {
       
        localStorage.clear();
        
    } else {
       
        sessionStorage.clear();
        
    }

}

export{DELETESTORE}