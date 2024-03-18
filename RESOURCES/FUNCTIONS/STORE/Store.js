//SET LOCAL STORAGE
const STORE=(STORAGE,KEY,ELEMENT)=>{

    if (STORAGE==='local') {
       
        localStorage.setItem(KEY,ELEMENT);
        
    } else {
       
        sessionStorage.setItem(KEY,ELEMENT);
        
    }

}

export{STORE}