import { ANDROIDPREMIUMPAYMENT } from "../ANDROIDPREMIUMPAYMENT/AndroidPremiumPayment.js";

const ANDROIDPAYPAL=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <h1 class='Payments'>Subscriptions</h1>

    </div>

    <div class='PrivacyPolicyDiv'>

        <div class='MonthlyDiv'>
                
            <h1 class='MonthlyHeader'>Daily Subscription Plan</h1>

            <p>Get Access To All Movies and Features on the App For One Day</p>
            
            <h1 class='MonthlyHeader'>USD.1.20</h1>

            <button id='paybutton' class='paydaily'>Subscribe</button>

        </div>

        <div class='MonthlyDiv'>
        
            <h1 class='MonthlyHeader'>Monthly Subscription Plan</h1>

            <p>Get Access To All Movies and Features on the App For One Month</p>
            
            <h1 class='MonthlyHeader'>USD.5.20</h1>

            <button id='paybutton' class='paymonthly'>Subscribe</button>
        
        </div>

        <div class='MonthlyDiv'>
        
            <h1 class='MonthlyHeader'>Annual Subscription Plan</h1>

            <p>Get Access To All Movies  and Features on the App For One Year</p>

            <h1 class='MonthlyHeader'>USD.55</h1>

            <button id='paybutton' class='payAnnually'>Subscribe</button>
    
        </div>
    
    </div>

    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDPREMIUMPAYMENT(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });

    const DAILYMONTHLY=document.querySelector('.paydaily');

    DAILYMONTHLY.addEventListener('click',()=>{

        open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-297406085E6526343MWKSUWQ');

    })


    const PAYMONTHLY=document.querySelector('.paymonthly');

    PAYMONTHLY.addEventListener('click',()=>{

        open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9Y042815JK734272FMWBPYJQ')

    })

    
    const PAYANNUALLY=document.querySelector('.payAnnually');

    PAYANNUALLY.addEventListener('click',()=>{

        open('https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-06M99592YV1798817MWGYUPY')

    })

}

export{ANDROIDPAYPAL}