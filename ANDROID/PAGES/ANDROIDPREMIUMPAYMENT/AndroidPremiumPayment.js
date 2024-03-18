import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";
import { PESAPAL } from "./pesapal.js";

const ANDROIDPREMIUMPAYMENT=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('Device')==='Android') {

      // StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
        
    } else {
       
        console.log('Android Version Changed Colour');
        
    }
    
    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <h1 class='Payments'>Payments</h1>

    </div>

    <br><br><br><br>
   
    <button class='MTN'>

        <h1 class='HolderName'>PESAPAL </h1>
        
        <img class='AppIcon' src='${ICONS}peasapal.png'/>
    
    </button>

    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        if (localStorage.getItem('PayPremium')==='NotDirect') {
            
            const element=JSON.parse(localStorage.getItem('Element'));

            MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

        } else {
           
            ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        }

        
    });

    const MTN=document.querySelector('.MTN');

    MTN.addEventListener('click',()=>{

        PESAPAL()

        DISPLAY(DIV,`<h1 class='AppName'>Please Wait</h1>`);

    });
   

}

export{ANDROIDPREMIUMPAYMENT}