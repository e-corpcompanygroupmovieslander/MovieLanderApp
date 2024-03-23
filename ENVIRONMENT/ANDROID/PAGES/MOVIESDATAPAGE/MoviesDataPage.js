import { MOVIESPATH } from "../../../../API/Api.js";
import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { ALERTBOX } from "../../../../RESOURCES/COMPONENTS/ALERTBOX/AlertBox.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { IFRAME } from "../../../../RESOURCES/COMPONENTS/IFRAME/Iframe.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { VIEW } from "../../../../RESOURCES/COMPONENTS/VIEW/View.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CONDITION } from "../../../../RESOURCES/FUNCTIONS/CONDITION/Condition.js";
import { CONDITIONER } from "../../../../RESOURCES/FUNCTIONS/CONDITIONER/Conditioner.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { DEJSON } from "../../../../RESOURCES/FUNCTIONS/DEJSON/Dejson.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { CATERGORIESSEARCHPAGE } from "../CATERGORIESEARCHPAGE/CatergoriesSearchPage.js";
import { FREEWATCHPAGE } from "../FREEWATCHPAGE/FreeWatchPage.js";
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

        CONDITION(sessionStorage.getItem('BackPath')==='Home'||'MoviesSearch',

            ()=>ALERTBOX(DIV,'Movie Lander ','Under Development'),
            
            ()=>VIEW(DIV,'PlayerHolder')
 
        )

        DECLARATION('.PlayerHolder',(ELEMENT)=>{

            STYLED(ELEMENT,'position','fixed');
            STYLED(ELEMENT,'width','100%');
            STYLED(ELEMENT,'height','100%');
            STYLED(ELEMENT,'borderRadius','0');
            STYLED(ELEMENT,'left','0');
            STYLED(ELEMENT,'right','0');
            STYLED(ELEMENT,'top','0');
            STYLED(ELEMENT,'bottom','0');
            STYLED(ELEMENT,'marginTop','0');

            IFRAME(ELEMENT,'https://www.youtube.com/embed/'+data.MoveTrailer,'YOUTUBEPLAYER')

        })

        HEADER(DIV,'AppHeader');

        DECLARATION('.AppHeader',(ELEMENT)=>{
            STYLED(ELEMENT,'background','Transparent');
            ICONS(ELEMENT,WHITEBACKICON,'BackIcon',()=>{

                CONDITIONER(sessionStorage.getItem('BackPath'),'Home',

                ()=>HOMEPAGE(DIV),

                ()=>CONDITIONER(sessionStorage.getItem('BackPath'),'MoviesSearch',

                ()=>CATERGORIESSEARCHPAGE(DIV),

                ()=>FREEWATCHPAGE(DIV)
                
                )
                
                )
  
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