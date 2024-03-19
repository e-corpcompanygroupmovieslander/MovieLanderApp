//Set Environment
const PESAPALENVIRONMENT=(TEXT)=>{

    if (TEXT) {

        localStorage.setItem('PesaPalEnvironment','Test')
        
    } else {
        localStorage.setItem('PesaPalEnvironment','Production') 
    }

}

export{PESAPALENVIRONMENT}