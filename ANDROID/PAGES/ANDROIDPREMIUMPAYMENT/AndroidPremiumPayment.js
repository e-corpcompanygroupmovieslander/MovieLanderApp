import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";
import { PESAPAL } from "./pesapal.js";

const ANDROIDPREMIUMPAYMENT=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    if (localStorage.getItem('Device')==='Android') {

      // StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
        
    } else {
       
        console.log('Android Version Changed Colour');
        
    }

    if (localStorage.getItem('location')==='Uganda') {

        sessionStorage.setItem('Daily','1000');
        sessionStorage.setItem('Weekly','5000');
        sessionStorage.setItem('Monthly','25000');
        sessionStorage.setItem('Yearly','150000');

        sessionStorage.setItem('Currency','UGX');

        
        
    }else{
       
        sessionStorage.setItem('Daily','1');
        sessionStorage.setItem('Weekly','5');
        sessionStorage.setItem('Monthly','25');
        sessionStorage.setItem('Yearly','100');

        sessionStorage.setItem('Currency','USD');
        
    }
    
    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='AndroidHeader'>

        <img class='BackIcon' src='${ICONS}back.png'/>

        <h1 class='Payments'>Payments</h1>

    </div>

    <br><br><br><br>

    <div class='Payment'>

        <h1 class='paytitle'>Daily</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Daily')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='Payment'>

        <h1 class='paytitle'>Weelky</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Weekly')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='Payment'>

        <h1 class='paytitle'>Monthly</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Monthly')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='Payment'>

        <h1 class='paytitle'>Yearly</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Yearly')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>


    
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