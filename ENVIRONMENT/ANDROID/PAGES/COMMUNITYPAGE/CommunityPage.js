import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITECHATICON } from "../../../../RESOURCES/ASSETS/ICONS/CHATICON/WhiteChatIcon.js";
import { WHITEMOVIENIGHTICON } from "../../../../RESOURCES/ASSETS/ICONS/MOVIENIGHTICON/MovieNightIcon.js";
import { WHITETRENDICON } from "../../../../RESOURCES/ASSETS/ICONS/TRENDICON/WhiteTrendIcon.js";
import { WHITEWRITEICON } from "../../../../RESOURCES/ASSETS/ICONS/WRITEICON/WhiteWriteIcon.js";
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
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";


const COMMUNITYPAGE=(DIV)=>{

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

        TEXT(ELEMENT,'h2','Connect With Others','SubsrciptionPlan',()=>{})

        BREAK(ELEMENT);BREAK(ELEMENT);

        BUTTON(ELEMENT,'Movie Request',WHITEWRITEICON,'',()=>{});

        BUTTON(ELEMENT,'Chat',WHITECHATICON,'',()=>{});

        BUTTON(ELEMENT,'Movie Night',WHITEMOVIENIGHTICON,'',()=>{});

        BUTTON(ELEMENT,'Trends',WHITETRENDICON,'',()=>{});
      
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
        TEXT(ELEMENT,'h2','Community','Subscription',()=>{})
        DECLARATION('.Subscription',(ELEMENT)=>{
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

export{COMMUNITYPAGE}