//SHOW STATUSBAR PLUGIN
const SHOWNAVIGATIONBAR=()=>{
    CONDITIONER(localStorage.getItem('Environment'),'Production',
    ()=>Android.showNavigationBar(),
    ()=>console.log('Nav bar Shown')
    )
    ; 
}

export{SHOWNAVIGATIONBAR}