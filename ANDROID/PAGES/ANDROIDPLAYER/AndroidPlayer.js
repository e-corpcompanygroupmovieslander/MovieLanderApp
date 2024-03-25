import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDPLAYER=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('AppPlayer')) {
        
        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    } else {
       
        CLEAR(DIV)

        DISPLAY(DIV,`
             
            <h1 class='AppName'>Movie Lander Player</h1>
    
            <h1 class='Message'>This Can be Changed In Settings</h1>
    
            <h1 class='Message'>Works With Google Drive Installed</h1>
    
            <button class='DrivePlayer'>
            
                <h1 class='HolderName'>Drive Player </h1>
    
                <img class='AppIcon' src='${ICONS}drive.png'/>
            
            </button>
    
            <h1 class='Message'>Works With Out Google Drive Installed</h1>
    
            <button class='LanderPlayer'>
            
                <h1 class='HolderName'>Movie Lander Player </h1>
    
                <img id='LanderPlayer' class='AppIcon' src='${ICONS}lander.png'/>
            
            </button>
            
        `)
        
    }

   

    const DRIVEPLAYER=document.querySelector('.DrivePlayer');

    DRIVEPLAYER.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','AppPlayer','Drive');

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const LANDERPLAYER=document.querySelector('.LanderPlayer');

    LANDERPLAYER.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','AppPlayer','LanderPlayer');

        ANDROIDHOMEPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

}

export{ANDROIDPLAYER}