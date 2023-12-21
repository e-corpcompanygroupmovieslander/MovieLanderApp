import { ANDROIDMTNPAYMENT } from "../MTNPAYMENT/MtnPayment.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDPREMIUMPAYMENT=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

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

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const PALPAY=document.querySelector('.PalPay');

    PALPAY.addEventListener('click',()=>{

        open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9Y042815JK734272FMWBPYJQ')

    })

    const MTN=document.querySelector('.MTN');

    MTN.addEventListener('click',()=>{

        ANDROIDMTNPAYMENT(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });
   



}

export{ANDROIDPREMIUMPAYMENT}