import { ANDROIDPREMIUMPAYMENT } from "../ANDROIDPREMIUMPAYMENT/AndroidPremiumPayment.js";
import { ANDROIDMTNINSTRUCTIONS } from "./MtnInstructions.js";
import { ANDROIDMTNPAY } from "./MtnPay.js";

const ANDROIDMTNPAYMENT=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

        </div>

        <br><br><br><br>

        <h1 class='Message'>Read The Instructions Before You Pay</h1>

        <button class='Instructions'>

            <h1 class='HolderName'>Instructions</h1>
        
            <img class='AppIcon' src='${ICONS}info.png'/>
        
        </button>

        <button class='MTNPAYMENTS' >

            <h1 class='HolderName'>Make Payments</h1>
            
            <img class='AppIcon' src='${ICONS}secretcode.png'/>
        
        </button>
        
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

       ANDROIDPREMIUMPAYMENT (DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const MTNINSTRUCTIONS=document.querySelector('.Instructions');

    
    MTNINSTRUCTIONS.addEventListener('click',()=>{

        ANDROIDMTNINSTRUCTIONS(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const MTNPAY=document.querySelector('.MTNPAYMENTS');

    MTNPAY.addEventListener('click',()=>{

        ANDROIDMTNPAY(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })


}

export{ANDROIDMTNPAYMENT}