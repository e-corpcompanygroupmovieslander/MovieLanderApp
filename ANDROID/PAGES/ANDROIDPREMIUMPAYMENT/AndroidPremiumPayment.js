import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDMTNPAYMENT } from "../MTNPAYMENT/MtnPayment.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDPREMIUMPAYMENT=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('Device')==='Android') {

        StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
        
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

    <button class='PalPay'>

        <h1 class='HolderName'>Pay Pal </h1>
        
        <img class='AppIcon' src='${ICONS}paypal.png'/>
    
    </button>

    
    <button class='MTN'>

        <h1 class='HolderName'>MTN </h1>
        
        <img class='AppIcon' src='${ICONS}mtn.jpg'/>
    
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

    const PALPAY=document.querySelector('.PalPay');

    PALPAY.addEventListener('click',()=>{

        alert('Under Development');

    })

    const MTN=document.querySelector('.MTN');

    MTN.addEventListener('click',()=>{

        ANDROIDMTNPAYMENT(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });
   



}

export{ANDROIDPREMIUMPAYMENT}