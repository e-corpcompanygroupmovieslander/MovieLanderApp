import { PRIVACYTEXT } from "../../../../API/Api.js";
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
import { DISPLAY } from "../../../../RESOURCES/FUNCTIONS/DISPLAY/Display.js";
import { GETPACKAGE } from "../../../../RESOURCES/FUNCTIONS/GETPACKAGE/GetPackage.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { SETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";


const PRIVACYPOLICYPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        CONDITIONER(navigator.onLine,false,

            ()=>MESSAGE(DIV,'Please Check Your Internet Connection',''),

            ()=>LOADER(ELEMENT,3000),GETPACKAGE(PRIVACYTEXT,'cors',(data)=>{

                CLEAR(ELEMENT),DISPLAY(ELEMENT,data);

            })
            
        )
       
    })

    HEADER(DIV,'AppHeader');

    DECLARATION('.AppHeader',(ELEMENT)=>{
        STYLED(ELEMENT,'background','Transparent');
        ICONS(ELEMENT,WHITEBACKICON,'BackIcon',()=>{
            SETTINGSPAGE(DIV);
        })
        DECLARATION('.BackIcon',(ELEMENT)=>{
            STYLED(ELEMENT,'marginLeft','1rem');
            STYLED(ELEMENT,'width','20px');
            STYLED(ELEMENT,'height','20px');
        })
        TEXT(ELEMENT,'h2','Policies','Profile',()=>{})
        DECLARATION('.Profile',(ELEMENT)=>{
            STYLED(ELEMENT,'fontSize','20px');
            STYLED(ELEMENT,'marginTop','auto');
            STYLED(ELEMENT,'marginBottom','auto');
            STYLED(ELEMENT,'marginRight','1rem');

        })
    })
    
}

export{PRIVACYPOLICYPAGE}