import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { LOADER } from "../../../../RESOURCES/COMPONENTS/LOADER/Loader.js";
import { MESSAGE } from "../../../../RESOURCES/COMPONENTS/MESSAGE/Message.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CONDITIONER } from "../../../../RESOURCES/FUNCTIONS/CONDITIONER/Conditioner.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";


const NOTIFICATIONSPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        CONDITIONER(navigator.onLine,false,

            ()=>LOADER(ELEMENT,3000),

            ()=>TEXT(ELEMENT,'h2','No Notifications','Notification',()=>{

                MESSAGE(DIV,'Please Check Your Internet Connection','');

            })
            
        )

        DECLARATION('.Notification',(ELEMENT)=>{

            STYLED(ELEMENT,'margin','70% 10%');

        })
      
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
        TEXT(ELEMENT,'h2','Reminders','Profile',()=>{})
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

export{NOTIFICATIONSPAGE}