import { LOGINAPI } from "../../APIS/MovielanderApi.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const LOGINUSER=(DIV)=>{

    const MESSAGE=document.querySelector('.LoginMessage');

    const BUTTON=document.querySelector('.LoginUserButton');

    const EMAIL=document.querySelector('#LoginEmail');

    const PASSWORD=document.querySelector('#LoginPassword');


    if (EMAIL.value && PASSWORD.value) {

        BUTTON.innerHTML=`

        <img class='LoginLoading' src='./IMAGES/Icons/loading.png'/>
        
        `;

        fetch(LOGINAPI)

        .then(res =>res.json())

        .then((result) => {

            const user=result.find(user => user.Email===EMAIL.value &&  user.Password === PASSWORD.value );
            
            if (user) {
                
                localStorage.setItem('User',user.SecretCode);

                if (user.Premium) {
                   
                    localStorage.setItem('UserPremium',user.Premium);
                    
                } else{

                    localStorage.removeItem('UserPremium');

                }

                HOMEPAGE(DIV);


            } else {

                localStorage.removeItem('User');

                localStorage.removeItem('UserPremium');
                
                MESSAGE.innerHTML=`User DoesNot Exist`;

                setTimeout(() => {
                
                    MESSAGE.innerHTML=``;
    
                    BUTTON.innerHTML=`LogIn`;
                    
                }, 2000);

            }

            console.log(result)

        }).catch((err) => {

            console.log(err)
            
            MESSAGE.innerHTML=`Something Went Wrong`;

            setTimeout(() => {
            
                MESSAGE.innerHTML=``;

                BUTTON.innerHTML=`LogIn`;
                
            }, 2000);

        });



        
    } else {
        
        MESSAGE.innerHTML=`Fill All Parts`;

        setTimeout(() => {
           
            MESSAGE.innerHTML=``;
            
        }, 2000);


    }


}

export{LOGINUSER}