import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITELOCKICON } from "../../../../RESOURCES/ASSETS/ICONS/LOCKICON/WhiteLockIcon.js";
import { WHITELOGOUTICON } from "../../../../RESOURCES/ASSETS/ICONS/LOGOUTICON/WhiteLogOutIcon.js";
import { APPMODEBUTTON } from "../../../../RESOURCES/COMPONENTS/APPMODEBUTTON/AppModeButton.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { REMOVESTORE } from "../../../../RESOURCES/FUNCTIONS/REMOVESTORE/RemoveStore.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";


const SETTINGSPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        BUTTON(ELEMENT,'AppLock',WHITELOCKICON,'',()=>{});

        APPMODEBUTTON(ELEMENT,'#5C829A','#121212')

        BUTTON(ELEMENT,'LogOut',WHITELOGOUTICON,'',()=>{

            REMOVESTORE('local','UserName');

            REMOVESTORE('local','Email');

            REMOVESTORE('local','Location');

            REMOVESTORE('local','User');

            LOGINPAGE(DIV);

        });
        

    })

    HEADER(DIV,'AppHeader');

    DECLARATION('.AppHeader',(ELEMENT)=>{
        STYLED(ELEMENT,'background','Transparent');
        ICONS(ELEMENT,WHITEBACKICON,'BackIcon',()=>{
            USERACCOUNPAGE(DIV);
        })
        DECLARATION('.BackIcon',(ELEMENT)=>{
            STYLED(ELEMENT,'marginLeft','1rem');
            STYLED(ELEMENT,'width','20px');
            STYLED(ELEMENT,'height','20px');
        })
        TEXT(ELEMENT,'h2','Settings','Profile',()=>{})
        DECLARATION('.Profile',(ELEMENT)=>{
            STYLED(ELEMENT,'fontSize','20px');
            STYLED(ELEMENT,'marginTop','auto');
            STYLED(ELEMENT,'marginBottom','auto');
            STYLED(ELEMENT,'marginRight','1rem');

        })
    })
    
}

export{SETTINGSPAGE}