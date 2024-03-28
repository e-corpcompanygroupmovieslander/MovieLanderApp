import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";
import { PESAPAL } from "./pesapal.js";
import { GETPACKAGE, SHUFFLEDATA, STYLED } from "../../../CONNECTION/Connection.js";
import { MTNPREMIUMPAYGET } from "../../../APIS/Api.js";

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

    <div class='Payment' id='dailypay'>

        <h1 class='paytitle'>Daily</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Daily')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='Payment' id='Weeklypay'>

        <h1 class='paytitle'>Weelky</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Weekly')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='Payment'  id='Monthlypay' >

        <h1 class='paytitle'>Monthly</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Monthly')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='Payment' id='Yearlypay'>

        <h1 class='paytitle'>Yearly</h1>

        <h1 class='Amount'>${sessionStorage.getItem('Yearly')}${sessionStorage.getItem('Currency')}</h1>
    
    </div>

    <div class='DetailsPage'></div>

    
    <div class='PaymentPage'></div>

    `);

    const CLOSEICON=document.querySelector('.closepayment');
    
    const DetailsPage=document.querySelector('.DetailsPage');


    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(DetailsPage,'background','#5C829A');

        
    } else {
        
        STYLED(DetailsPage,'background','#212121');
        
    }
 
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        if (localStorage.getItem('PayPremium')==='NotDirect') {
            
            const element=JSON.parse(localStorage.getItem('Element'));

            MOVIESETUPPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE,element);

        } else {
           
            ANDROIDUSERACCOUNTPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
        }
   
    });

    const DAILY=document.querySelector('#dailypay');

    DAILY.addEventListener('click',()=>{

        localStorage.removeItem('redirect');

        localStorage.setItem('backurl','https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/dailypesapal.html')

        localStorage.setItem('Amount',sessionStorage.getItem('Daily'));

        DetailsPage.style.display='block';

        DISPLAY(DetailsPage,`

            <h1 class='PaymentMenu'>Features</h1>

            <button>Access To All Movies</button>

            <div class='Payment' id='Yearlypay'>

                <button class='Cancel' id='Cancel'>Cancel</button>

                <button class='Cancel' id='Pay' >Pay</button>


            </div>
        
        `)

        const Cancel=document.querySelector('#Cancel');

        Cancel.addEventListener('click',()=>{
    
            DetailsPage.style.display='none';
            
        })    

        const Pay=document.querySelector('#Pay');

        Pay.addEventListener('click',()=>{

            DISPLAY(Pay, `<img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);

            PESAPAL()

        });

    });

    const WEEKLY=document.querySelector('#Weeklypay');

    WEEKLY.addEventListener('click',()=>{

        localStorage.removeItem('redirect');

        localStorage.setItem('backurl','https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/weeklypesapal.html')

        localStorage.setItem('Amount',sessionStorage.getItem('Weekly'));

        DetailsPage.style.display='block';

        DISPLAY(DetailsPage,`

            <h1 class='PaymentMenu'>Features</h1>

            <button>Access To All Movies</button>

            <button>Access To Community</button>

            <div class='Payment' id='Yearlypay'>

                <button class='Cancel' id='Cancel'>Cancel</button>

                <button class='Cancel' id='Pay' >Pay</button>

            </div>
        
        `)

        const Cancel=document.querySelector('#Cancel');

        Cancel.addEventListener('click',()=>{
    
            DetailsPage.style.display='none';
            
        })    

        const Pay=document.querySelector('#Pay');

        Pay.addEventListener('click',()=>{

            DISPLAY(Pay, `<img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);

            PESAPAL()

        });

    });

    const MONTHLY=document.querySelector('#Monthlypay');

    MONTHLY.addEventListener('click',()=>{

        localStorage.removeItem('redirect');

        localStorage.setItem('backurl','https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/monthlypesapal.html')

        localStorage.setItem('Amount',sessionStorage.getItem('Monthly'));

        DetailsPage.style.display='block';

        DISPLAY(DetailsPage,`

            <h1 class='PaymentMenu'>Features</h1>

            <button>Access To All Movies</button>

            <button>Access To Community</button>

            <button>1 Week Extra</button>

            <div class='Payment' id='Yearlypay'>

                <button class='Cancel' id='Cancel'>Cancel</button>

                <button class='Cancel' id='Pay' >Pay</button>

            </div>
        
        `)

        const Cancel=document.querySelector('#Cancel');

        Cancel.addEventListener('click',()=>{
    
            DetailsPage.style.display='none';
            
        })    

        const Pay=document.querySelector('#Pay');

        Pay.addEventListener('click',()=>{

            DISPLAY(Pay, `<img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);

            PESAPAL()

        });


    });

    const YEARLY=document.querySelector('#Yearlypay');

    YEARLY.addEventListener('click',()=>{

        localStorage.removeItem('redirect');
 
        localStorage.setItem('backurl','https://e-corpcompanygroupmovieslander.github.io/MovieLanderApp/PAGES/PAYMENT%20SYSTEM/yearlypesapal.html')

        localStorage.setItem('Amount',sessionStorage.getItem('Yearly'));

        DetailsPage.style.display='block';

        DISPLAY(DetailsPage,`

            <h1 class='PaymentMenu'>Features</h1>

            <button>Access To All Movies</button>

            <button>Access To Community</button>

            <button>3 Months Extra</button>

            <button>Offline Usage</button>

            <button>1gb cloud Storage</button>

            <div class='Payment' id='Yearlypay'>

                <button class='Cancel' id='Cancel'>Cancel</button>

                <button class='Cancel' id='Pay' >Pay</button>

            </div>
        
        `)

        const Cancel=document.querySelector('#Cancel');

        Cancel.addEventListener('click',()=>{
    
            DetailsPage.style.display='none';
            
        })    

        const Pay=document.querySelector('#Pay');

        Pay.addEventListener('click',()=>{

            DISPLAY(Pay, `<img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);

            PESAPAL()

        });


    });

    const confirmpayment=document.querySelector('.confirmpayment');

    confirmpayment.addEventListener('click',()=>{

        DetailsPage.style.display='block';

        DISPLAY(DetailsPage,`

            <h1 class='PaymentMenu'>PAYMENT REFERENCE</h1>

            <h1 class='payment'>Enter Reference Number Of Payment From Email</h1>

            <input class='ReferenceNumber' type='number' placeholder='Enter Reference Number' >

            <div class='Payment' id='Yearlypay'>

                <button class='Cancel' id='Cancel'>Cancel</button>

                <button class='Cancel' id='Pay' >Pay</button>

            </div>

            <br><br>
        
        `)

        const Cancel=document.querySelector('#Cancel');

        Cancel.addEventListener('click',()=>{
    
            DetailsPage.style.display='none';
            
        })    

        const Pay=document.querySelector('#Pay');
        
        const ReferenceNumber=document.querySelector('.ReferenceNumber');

        Pay.addEventListener('click',()=>{

            if (ReferenceNumber.value) {
                
                DISPLAY(Pay, `<img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>`);  

                GETPACKAGE(MTNPREMIUMPAYGET,'cors')

                .then(data=>{

                    const Premiumed = data.find(user => user.User === ReferenceNumber.value);

                    if (Premiumed) {
                        
                        if (Premiumed.ExpiryDate >= new Date()) {
                          
                            ADVANCE.ADDSTORAGE('local', 'Premium', 'TRUE');

                            console.log(data);
                            
                        } else {

                            ADVANCE.REMOVESTORAGE('local', 'Premium');
                            
                            alert('Payment Expired');

                            DetailsPage.style.display='none';

                        }
                        

                    } else {
                        
                        ADVANCE.REMOVESTORAGE('local', 'Premium');

                        alert('invalid PayMent')

                        DetailsPage.style.display='none';

                    }

                })

                .catch(error=>console.error(error))

            } else {
                
                alert('Enter Your Reference Number');

            }

        })
            

    })
   

}

export{ANDROIDPREMIUMPAYMENT}