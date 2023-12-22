import { PRIVACYTEXT } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js";

const ANDROIDCREATEPRIVACYPOLICYPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{
    
    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='CreateAccountPrivacyPolicy'></div>
    
    `);

    const PRIVACYPOLICYDIV=document.querySelector('.CreateAccountPrivacyPolicy');

    DISPLAY(PRIVACYPOLICYDIV,`
    
        <img  id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `);

    fetch(PRIVACYTEXT)

    .then(res =>res.text())

    .then((result) => {

        CLEAR(PRIVACYPOLICYDIV);

        DISPLAY(PRIVACYPOLICYDIV,`
        <h1 class='Message'>Read Our Privacy Policy CareFully</h1>
        ${result}
        <button class='CreateAccountPrivacyPolicyButton'>I AGREE</button>
        `);

        const CONTINUE=document.querySelector('.CreateAccountPrivacyPolicyButton');

        CONTINUE.addEventListener('click',()=>{

            ADVANCE.ADDSTORAGE('local','Privacy','TRUE')

            ANDROIDPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

        })

    }).catch((err) => {
        console.log(err)
    });

}

export{ANDROIDCREATEPRIVACYPOLICYPAGE}