//HIDE STATUSBAR PLUGIN
const HIDENAVIGATIONBAR=()=>{
    CONDITIONER(localStorage.getItem('Environment'),'Production',
    ()=>Android.hideNavigationBar(),
    ()=>console.log('Nav bar Hidden')
    )  
}

export{HIDENAVIGATIONBAR}