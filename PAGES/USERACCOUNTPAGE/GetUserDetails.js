import { LOGINAPI } from "../../APIS/MovielanderApi.js"

const GETUSERDETAILS=(DIV)=>{

    const EMAILHOLDER=document.querySelector('.EmailHolder');

    const USERDETAIS=document.querySelector('.UserDetailsHolder')

    const USER=localStorage.getItem('User');

    EMAILHOLDER.innerHTML=`

        <img class='LoginLoading' src='./IMAGES/Icons/loading.png'/>
    
    `;

    USERDETAIS.innerHTML=`

        <img id='UserLoading' class='LoginLoading' src='./IMAGES/Icons/loading.png'/>
    
    `;

    fetch(LOGINAPI)

    .then(res=>res.json())

    .then((result) => {

        const user=result.find(user => user.SecretCode===USER );

        if (user) {
            
            EMAILHOLDER.innerHTML=`<h1 id='EmailHolder'>${user.Email}</h1>`;

            USERDETAIS.innerHTML=`

            <h1 id='UserName'>${user.UserName}</h1>

            <h1 id='UserName'>${user.Location}</h1>

            <h1 id='UserName'>${user.Telephone}</h1>

            <h1 id='UserName'>${user.SecretCode}</h1>
            
            `;

        } else {
            
        }

    }).catch((err) => {
        console.log(err)
    });

}

export{GETUSERDETAILS}