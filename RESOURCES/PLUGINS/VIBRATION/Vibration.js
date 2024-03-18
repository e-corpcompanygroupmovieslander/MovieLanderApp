//VIBRATION PLUGIN
const VIBRATION=(TIME)=>{

    CONDITION(localStorage.getItem('Environment')==='Production',
        ()=>Android.vibrate(TIME),
        ()=>console.log('Vibration Is On',TIME)   
    )

}

export{VIBRATION}