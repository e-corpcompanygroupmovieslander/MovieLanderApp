//DOWNLOAD PLUGIN
const DOWNLOAD=(PATH,NAME)=>{

    CONDITION(localStorage.getItem('Environment')==='Production',
        ()=>Android.downloadFile(PATH,NAME),
        ()=>console.log('File Is Downloading',NAME)   
    )
    
}

export{DOWNLOAD}