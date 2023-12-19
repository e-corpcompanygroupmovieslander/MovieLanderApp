import { PRIVACYTEXT } from "../../../APIS/Api.js";
import { ANDROIDPLAYER } from "../ANDROIDPLAYER/AndroidPlayer.js";

const ANDROIDCREATEPRIVACYPOLICYPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{
    
    CLEAR(DIV);

    DISPLAY(DIV,`

    <div class='CreateAccountPrivacyPolicy' ></div>

    <button class='CreateAccountPrivacyPolicyButton'>Continue</button>
    
    `);

    const PRIVACYPOLICYDIV=document.querySelector('.CreateAccountPrivacyPolicy');

    DISPLAY(PRIVACYPOLICYDIV,`
    
        <img  id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    
    `);

    fetch(PRIVACYTEXT)

    .then(res =>res.text())

    .then((result) => {

        CLEAR(PRIVACYPOLICYDIV);

        DISPLAY(PRIVACYPOLICYDIV,result);

    }).catch((err) => {
        console.log(err)
    });

    const CONTINUE=document.querySelector('.CreateAccountPrivacyPolicyButton');

    CONTINUE.addEventListener('click',()=>{

        ANDROIDPLAYER(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

}

export{ANDROIDCREATEPRIVACYPOLICYPAGE}