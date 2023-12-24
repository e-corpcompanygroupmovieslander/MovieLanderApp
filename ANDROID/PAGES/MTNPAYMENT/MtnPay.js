import { MTNPREMIUMPAY, MTNPREMIUMPAYGET } from "../../../APIS/Api.js";
import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";
import { ANDROIDMTNPAYMENT } from "./MtnPayment.js";

const ANDROIDMTNPAY = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
  CLEAR(DIV);

  DISPLAY(DIV, `
    <div class='AndroidHeader'>
      <img class='BackIcon' src='${ICONS}back.png'/>
      <h1 class='Payments'>MTN PAY</h1>
    </div>
    <br><br><br>
    <h1 class='Message'>Paste Your Message Of Payment Here</h1>
    <textarea class="PaymentMtn" placeholder="Paste Message Here" cols="30" rows="10"></textarea>
    <button class='PAYMTN'>Subscribe</button>
  `);

  const BACKICON = document.querySelector('.BackIcon');

  BACKICON.addEventListener('click', () => {
    ANDROIDMTNPAYMENT(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
  });

  const PAYMTN = document.querySelector('.PAYMTN');
  const MESSAGEPAY = document.querySelector('.PaymentMtn');
  const MESSAGE = document.querySelector('.Message');

  MESSAGEPAY.addEventListener('input',()=>{

    // Disable editing of the textarea
    MESSAGEPAY.readOnly = true;

  })

  PAYMTN.addEventListener('click', () => {
    if (MESSAGEPAY.value) {

      DISPLAY(PAYMTN,`
                
      <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>

      `)
      const inputString = MESSAGEPAY.value;

      // Define regular expressions to match the relevant information
      const paidRegex = /paid UGX (\d+)/;
      const nameRegex = /to (.+?) on/;
      const dateRegex = /on (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/;
      const idRegex = /ID: (\d+)/;

      // Extract information using regular expressions
      const paidMatch = inputString.match(paidRegex);
      const nameMatch = inputString.match(nameRegex);
      const dateMatch = inputString.match(dateRegex);
      const idMatch = inputString.match(idRegex);

      // Display the extracted information
      if (paidMatch && nameMatch && dateMatch && idMatch) {
        const paidAmount = paidMatch[1];
        const name = nameMatch[1];
        const date = dateMatch[1];
        const id = idMatch[1];

        // Save to sessionStorage
        sessionStorage.setItem('paidAmount', paidAmount);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('date', date);
        sessionStorage.setItem('id', id);

        const WEEKLYPAYMENT = '5000';
        const MONTHLYPAYMENT = '15000';
        const PAIDNAME = ' ANDREW RICHARD EROU';
        const TODAYSDATEDATE = new Date();

        // PAY DETAILS
        const PAIDAMOUNT = sessionStorage.getItem('paidAmount');
        const NAME = sessionStorage.getItem('name');
        const DATE = new Date(sessionStorage.getItem('date'));
        const ID = sessionStorage.getItem('id');

        // Check if the date is expired
        const isDateExpired = TODAYSDATEDATE - DATE > 24 * 60 * 60 * 1000;

        if (isDateExpired) {

          DISPLAY(MESSAGE,`Subscription Expired`);
          
          setTimeout(() => {
            
            DISPLAY(MESSAGE,`Paste Your Message Of Payment Here`);

          }, 2000);


        } else if ((PAIDAMOUNT !== WEEKLYPAYMENT && PAIDAMOUNT !== MONTHLYPAYMENT) ||
          NAME !== PAIDNAME) {
          if (NAME !== PAIDNAME) {
            DISPLAY(MESSAGE,`Check Your Subscription Company Name`);
          
            setTimeout(() => {
              
              DISPLAY(PAYMTN,`Subscribe`);

              DISPLAY(MESSAGE,`Paste Your Message Of Payment Here`);
  
            }, 2000);
          } else {
            
            DISPLAY(MESSAGE,`Check Your Subscription Package`);
          
            setTimeout(() => {
              
              DISPLAY(PAYMTN,`Subscribe`);
              
              DISPLAY(MESSAGE,`Paste Your Message Of Payment Here`);
  
            }, 2000);

          }
        } else {
          let ExpiryDate = '';

          // Calculate the expiration date based on the payment frequency
          if (PAIDAMOUNT === WEEKLYPAYMENT) {
            const expirationDate = new Date(TODAYSDATEDATE); // Use the current date
            expirationDate.setDate(expirationDate.getDate() + 6);
            ExpiryDate = expirationDate.toISOString().slice(0, 19).replace("T", " ");
          } else if (PAIDAMOUNT === MONTHLYPAYMENT) {
            const expirationDate = new Date(TODAYSDATEDATE); // Use the current date
            expirationDate.setDate(expirationDate.getDate() + 31);
            ExpiryDate = expirationDate.toISOString().slice(0, 19).replace("T", " ");
          }

          const USER = {
            "User": localStorage.getItem('User'),
            "AmountPaid": PAIDAMOUNT,
            "PaidTo": "MovieLander",
            "PayeeName": NAME,
            "TRANSACTIONID": ID,
            "PayDate": DATE,
            "ExpiryDate": ExpiryDate,
            "Message": MESSAGEPAY.value
          };

          fetch(MTNPREMIUMPAYGET)

            .then(res => res.json())
            .then(data => {
              // Assuming data is an array of IDs
              const allIds = data.map(item => item.Id);

              // Save all IDs to sessionStorage
              sessionStorage.setItem('IDS', JSON.stringify(allIds));

              // GET ALL IDS FROM AS JSON
              const USEDID = JSON.parse(sessionStorage.getItem('IDS'));

              console.log(USEDID);

              if (USEDID.includes(parseInt(ID))) {
                
                DISPLAY(MESSAGE,`Subscription Used`);
          
                setTimeout(() => {

                  DISPLAY(PAYMTN,`Subscribe`);
                  
                  DISPLAY(MESSAGE,`Paste Your Message Of Payment Here`);
        
                }, 2000);

              } else {
 
                fetch(MTNPREMIUMPAY, {
                  method: "POST",
                  mode:'no-cors',
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(USER),
                })

                  .then(data => {
                    
                    ADVANCE.ADDSTORAGE('local','Premium','TRUE');

                    ANDROIDUSERACCOUNTPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);

                  })
                  .catch(err => console.log(err));
              }
            })
            .catch(err => console.log(err));
        }
      } else {
        DISPLAY(MESSAGE,`Invalid Subscription`);
          
        setTimeout(() => {
          
          DISPLAY(PAYMTN,`Subscribe`);
          
          DISPLAY(MESSAGE,`Paste Your Message Of Payment Here`);

        }, 2000);
      }
    } else {
      DISPLAY(MESSAGE, 'Provide Your Payment Message');

      setTimeout(() => {

        DISPLAY(PAYMTN,`Subscribe`);

        DISPLAY(MESSAGE, 'Paste Your Message Of Payment Here');
      }, 2000);
    }
  });
};

export { ANDROIDMTNPAY };
