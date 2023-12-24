import { ANDROIDMTNPAYMENT } from "./MtnPayment.js";

const ANDROIDMTNINSTRUCTIONS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Payment Instructions</h1>

        </div>

        <div  class='PrivacyPolicyDiv'>

            <h1 class='PaymentHeader'>MTN Payments</h1>

            <p class='instructions'> 
            
                Follow These Instructions To be Able to Pay Successfully For Movie Lander Premium 
            
                <br>

                You will need the follow to Sucessfully Pay For Premium Using MTN 

                <br><br>

                The Merchant Code: <b>928966</b>

                <br><br>
                
                Dail *165#

                <br><br>

                Then Choose Option 3

                <br><br>

                Then Choose Option 1
                
                <br><br>

                Then Choose Option 1
                
                <br><br>

                Then Enter This Merchant Code Above

                <br><br>

                Then Choose The Amount From the List Below

                <br><br>

                <b>5000 - Weekly</b>

                <br><br>

                <b>15000 - Monthly</b>

                <br><br>
                
                <b>Note</b>

                <br><br>

                <b>
                Entering Any Other Merchant Code Besides the one Provided Will be Invalid And Movie Lander Won't Compensate For Your failure to Follow Instructions
                
                </b>

                <br><br>

                After The Transaction is Scuccessful, Copy the SMS message of your payments then open Movie Lander And Go To Make payments Section and Finish The Process for Your Premium Payments.

                <br><br>

                <b>This Message Pasting Shouldnot exceed 24hours from the date of payment</b>

                <br><br>

            </p>
            

            
        
        </div>
    
    `);

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

       ANDROIDMTNPAYMENT (DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    });


}

export{ANDROIDMTNINSTRUCTIONS}