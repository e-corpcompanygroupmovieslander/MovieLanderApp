import { MOVIESPATH } from "../../../../API/Api.js";
import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { DEJSON } from "../../../../RESOURCES/FUNCTIONS/DEJSON/Dejson.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";


const MOVIESDATAPAGE=(DIV)=>{

    CLEAR(DIV);

    DEJSON('','MovieData',(data)=>{

        IMAGE(DIV,MOVIESPATH+data.MovieImage,'ImagePath',()=>{})

        DECLARATION('.ImagePath',(ELEMENT)=>{

            STYLED(ELEMENT,'position','fixed');
            STYLED(ELEMENT,'width','100%');
            STYLED(ELEMENT,'height','100%');
            STYLED(ELEMENT,'borderRadius','0');
            STYLED(ELEMENT,'left','0');
            STYLED(ELEMENT,'right','0');
            STYLED(ELEMENT,'top','0');
            STYLED(ELEMENT,'bottom','0');
            STYLED(ELEMENT,'marginTop','0');

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
                STYLED(ELEMENT,'background','#00000080');
                STYLED(ELEMENT,'borderRadius','50px');
                STYLED(ELEMENT,'padding','5px');
            })
            TEXT(ELEMENT,'h2',data.MovieName,'Profile',()=>{})
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
    
    })

}

export{MOVIESDATAPAGE}