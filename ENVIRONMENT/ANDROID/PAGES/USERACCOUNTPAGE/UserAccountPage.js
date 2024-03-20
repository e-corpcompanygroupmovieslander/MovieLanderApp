import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITEGRIDICON } from "../../../../RESOURCES/ASSETS/ICONS/GRIDICON/WhiteGridIcon.js";
import { WHITEGROUPICON } from "../../../../RESOURCES/ASSETS/ICONS/GROUPICON/WhiteGroupIcon.js";
import { WHITELIBRARYICON } from "../../../../RESOURCES/ASSETS/ICONS/LIBRARYICON/WhiteLibraryIcon.js";
import { WHITENOTIFICATIONICON } from "../../../../RESOURCES/ASSETS/ICONS/NOTIFICATION/WhiteNotificationIcon.js";
import { WHITEPHONEICON } from "../../../../RESOURCES/ASSETS/ICONS/PHONEICON/WhitePhoneIcon.js";
import { WHITESETTINGSICON } from "../../../../RESOURCES/ASSETS/ICONS/SETTINGSICON/WhiteSettingsIcon.js";
import { WHITEUNLOCKEDICON } from "../../../../RESOURCES/ASSETS/ICONS/UNLOCKICON/WhiteUnlockedIcon.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { VIEW } from "../../../../RESOURCES/COMPONENTS/VIEW/View.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { COMMUNITYPAGE } from "../COMMUNITYPAGE/CommunityPage.js";
import { CONTACTUSPAGE } from "../CONTACTUSPAGE/ContactUsPage.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { LIBARYPAGE } from "../LIBARYPAGE/libraryPage.js";
import { MOREAPPSPAGE } from "../MOREAPPSPAGE/MoreAppsPage.js";
import { NOTIFICATIONSPAGE } from "../NOTIFICATIONSPAGE/NotificationsPage.js";
import { PREMIUMPAGE } from "../PREMIUMPAGE/PremiumPage.js";
import { SETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";


const USERACCOUNPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        VIEW(ELEMENT,'ProfileData');

        BUTTON(ELEMENT,'Premium',WHITEUNLOCKEDICON,'',()=>{PREMIUMPAGE(DIV)});

        BUTTON(ELEMENT,'Community',WHITEGROUPICON,'',()=>{COMMUNITYPAGE(DIV)});

        BUTTON(ELEMENT,'Library',WHITELIBRARYICON,'',()=>{LIBARYPAGE(DIV)});

        BUTTON(ELEMENT,'Notification',WHITENOTIFICATIONICON,'',()=>{NOTIFICATIONSPAGE(DIV)});

        BUTTON(ELEMENT,'Settings',WHITESETTINGSICON,'',()=>{SETTINGSPAGE(DIV)});

        BUTTON(ELEMENT,'More Apps',WHITEGRIDICON,'',()=>{MOREAPPSPAGE(DIV)});

        BUTTON(ELEMENT,'Contact Us',WHITEPHONEICON,'',()=>{CONTACTUSPAGE(DIV)});

    })

    HEADER(DIV,'AppHeader');

    DECLARATION('.AppHeader',(ELEMENT)=>{
        STYLED(ELEMENT,'background','Transparent');
        ICONS(ELEMENT,WHITEBACKICON,'BackIcon',()=>{
            HOMEPAGE(DIV)
        })
        DECLARATION('.BackIcon',(ELEMENT)=>{
            STYLED(ELEMENT,'marginLeft','1rem');
            STYLED(ELEMENT,'width','20px');
            STYLED(ELEMENT,'height','20px');
        })
        TEXT(ELEMENT,'h2','Profile','Profile',()=>{})
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

export{USERACCOUNPAGE}