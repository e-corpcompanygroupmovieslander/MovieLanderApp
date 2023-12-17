import { LOGINAPI } from "../../../APIS/Api.js"

const GETUSERDETAILS=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    const USERDETAILSDIV=document.querySelector('.UserDetailsHolder');

    DISPLAY(USERDETAILSDIV,`

        <img  id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>

    `);

    const STOREDUSER=localStorage.getItem('User');

    ADVANCE.GETPACKAGE(LOGINAPI,'cors')

    .then((result) => {

        CLEAR(USERDETAILSDIV)

        const users=result.find(user => user.SecretCode=== STOREDUSER);
        
        if (users) {

            DISPLAY(USERDETAILSDIV,`

                <h1 class='NameHolders'>${users.UserName}</h1>

                <h1 class='NameHolders'>${users.Location}</h1>

                <h1 class='NameHolders'>${users.Telephone}</h1>


            `)
            
        } else {
            
        }

    }).catch((err) => {
        
        console.log(err)

    });

}

export{GETUSERDETAILS}