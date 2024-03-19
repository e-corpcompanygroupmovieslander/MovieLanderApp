import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITECHATICON } from "../../../../RESOURCES/ASSETS/ICONS/CHATICON/WhiteChatIcon.js";
import { WHITEFACEBOOKICON } from "../../../../RESOURCES/ASSETS/ICONS/FACEBOOKICON/WhiteFaceBookIcon.js";
import { WHITEINSTAGRRAMICON } from "../../../../RESOURCES/ASSETS/ICONS/INSTAGRAM/WhiteInstagramIcon.js";
import { WHITELOCKICON } from "../../../../RESOURCES/ASSETS/ICONS/LOCKICON/WhiteLockIcon.js";
import { WHITEWEBSITEICON } from "../../../../RESOURCES/ASSETS/ICONS/WEBSITEICON/WhiteWebSiteIcon.js";
import { MOVIELANDERPNG } from "../../../../RESOURCES/ASSETS/IMAGES/MOVIELANDERIMAGES/MovieLanderPng.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { BREAK } from "../../../../RESOURCES/FUNCTIONS/BREAK/Break.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { FACEBOOK } from "../../../../RESOURCES/FUNCTIONS/FACEBOOK/FaceBook.js";
import { GMAIL } from "../../../../RESOURCES/FUNCTIONS/GMAIL/Gmail.js";
import { INSTAGRAM } from "../../../../RESOURCES/FUNCTIONS/INSTAGRAM/Instagram.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { WEBSITE } from "../../../../RESOURCES/FUNCTIONS/WEBSITE/WebSite.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";


const CONTACTUSPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');
  
        IMAGE(ELEMENT,MOVIELANDERPNG,'AppImage',()=>{})   
        
        DECLARATION('.AppImage',(ELEMENT)=>{
            STYLED(ELEMENT,'width','30%');
            STYLED(ELEMENT,'height','auto');
            STYLED(ELEMENT,'padding','10% 2%');
            STYLED(ELEMENT,'margin','2% 30%');
            
        })

        TEXT(ELEMENT,'h2','Get In Touch','SubsrciptionPlan',()=>{})

        BREAK(ELEMENT);BREAK(ELEMENT);

        BUTTON(ELEMENT,'Gmai',WHITELOCKICON,'',()=>{GMAIL('movielander1999@gmail.com')});

        BUTTON(ELEMENT,'Facebook',WHITEFACEBOOKICON,'',()=>{FACEBOOK('')});

        BUTTON(ELEMENT,'Instagram',WHITEINSTAGRRAMICON,'',()=>{INSTAGRAM('e_corp_company_group')});

        BUTTON(ELEMENT,'Website',WHITEWEBSITEICON,'',()=>{WEBSITE('https://www.e-corpcompanygroup.com')});
      
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
        TEXT(ELEMENT,'h2','Reach Us','Subscription',()=>{})
        DECLARATION('.Subscription',(ELEMENT)=>{
            STYLED(ELEMENT,'fontSize','20px');
            STYLED(ELEMENT,'marginTop','auto');
            STYLED(ELEMENT,'marginBottom','auto');
            STYLED(ELEMENT,'marginRight','1rem');

        })
    })
    
}

export{CONTACTUSPAGE}