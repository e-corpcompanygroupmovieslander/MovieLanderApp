import { BUTTON, DECLARATION, IMAGE, INPUT, STYLED } from "../../../../RESOURCES/CONNECTION/Connection.js"

const LOGINPAGE=()=>{

    IMAGE('',WHITEAPPMODEICON,'ys',()=>{})
    DECLARATION('.ys',(ELEMENT)=>{

        STYLED(ELEMENT,'width','95%');
        STYLED(ELEMENT,'height','30%');

    })

    INPUT('','Email','Enter User Name','');

    INPUT('','Password','Enter User Password','');

    BUTTON('','Login','','',()=>{});

    BUTTON('','Create Account','','',()=>{});

}

export{LOGINPAGE}