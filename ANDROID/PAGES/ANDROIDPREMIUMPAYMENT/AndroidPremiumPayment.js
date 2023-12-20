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

    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const PALPAY=document.querySelector('.PalPay');

    PALPAY.addEventListener('click',()=>{

        open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9Y042815JK734272FMWBPYJQ')

    })


}

export{ANDROIDPREMIUMPAYMENT}