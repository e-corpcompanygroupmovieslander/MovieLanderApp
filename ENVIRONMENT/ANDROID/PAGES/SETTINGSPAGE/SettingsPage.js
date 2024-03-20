import { UPDATEAPI } from "../../../../API/Api.js";
import { WHITEAPPICON } from "../../../../RESOURCES/ASSETS/ICONS/APPICON/WhiteAppIcon.js";
import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITEDELETEICON } from "../../../../RESOURCES/ASSETS/ICONS/DELETEICON/WhiteDeleteIcon.js";
import { WHITEHELPICON } from "../../../../RESOURCES/ASSETS/ICONS/HELPICON/WhiteHelpIcon.js";
import { WHITEINFORMATIONICON } from "../../../../RESOURCES/ASSETS/ICONS/INFORMATIONICON/WhiteInformationIcon.js";
import { WHITELOCKICON } from "../../../../RESOURCES/ASSETS/ICONS/LOCKICON/WhiteLockIcon.js";
import { WHITELOGOUTICON } from "../../../../RESOURCES/ASSETS/ICONS/LOGOUTICON/WhiteLogOutIcon.js";
import { WHITENOTIFICATIONICON } from "../../../../RESOURCES/ASSETS/ICONS/NOTIFICATION/WhiteNotificationIcon.js";
import { WHITEPARENTALCONTROLICON } from "../../../../RESOURCES/ASSETS/ICONS/PARENTALCONTROLICON/WhiteParentalControlIcon.js";
import { WHITEPLAYERICON } from "../../../../RESOURCES/ASSETS/ICONS/PLAYERICON/WhitePlayerIcon.js";
import { WHITEPRIVACYPOLICYICON } from "../../../../RESOURCES/ASSETS/ICONS/PRIVACYPOLICYICON/WhitePrivacyPolicyIcon.js";
import { ALERTBOX } from "../../../../RESOURCES/COMPONENTS/ALERTBOX/AlertBox.js";
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
import { WEBSITE } from "../../../../RESOURCES/FUNCTIONS/WEBSITE/WebSite.js";
import { HELPPAGE } from "../HELPPAGE/HelpPage.js";
import { LOGINPAGE } from "../LOGINPAGE/LoginPage.js";
import { PRIVACYPOLICYPAGE } from "../PRIVACYPOLICYPAGE/PrivacyPolicyPage.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";


const SETTINGSPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        APPMODEBUTTON(ELEMENT,'#5C829A','#121212');

        BUTTON(ELEMENT,'AppLock',WHITELOCKICON,'',()=>{});

        BUTTON(ELEMENT,'App Player',WHITEPLAYERICON,'',()=>{});

        BUTTON(ELEMENT,'App Notifications',WHITENOTIFICATIONICON,'',()=>{});

        BUTTON(ELEMENT,'Parental Control',WHITEPARENTALCONTROLICON,'',()=>{});

        BUTTON(ELEMENT,'Privacy Policy',WHITEPRIVACYPOLICYICON,'',()=>{PRIVACYPOLICYPAGE(DIV)});

        BUTTON(ELEMENT,'Help',WHITEHELPICON,'',()=>{HELPPAGE(DIV)});

        BUTTON(ELEMENT,'Update',WHITEAPPICON,'',()=>{WEBSITE(UPDATEAPI)});

        BUTTON(ELEMENT,'App Version',WHITEINFORMATIONICON,'',()=>{ALERTBOX(DIV,'Movie Lander','VERSION 8')});

        BUTTON(ELEMENT,'Delete  Account',WHITEDELETEICON,'',()=>{});

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
            STYLED(ELEMENT,'fontSize','15px');
            STYLED(ELEMENT,'marginTop','auto');
            STYLED(ELEMENT,'marginBottom','auto');
            STYLED(ELEMENT,'marginRight','1rem');
            STYLED(ELEMENT,'background','#00000080');
            STYLED(ELEMENT,'borderRadius','50px');
            STYLED(ELEMENT,'padding','5px');

        })
    })
    
}

export{SETTINGSPAGE}