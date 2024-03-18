import { WHITELISTICON } from "../../../../RESOURCES/ASSETS/ICONS/LISTICON/WhiteListIcon.js";
import { WHITEMOVIESICON } from "../../../../RESOURCES/ASSETS/ICONS/MOVIESICON/WhiteMoviesIcon.js";
import { WHITEPROFILEICON } from "../../../../RESOURCES/ASSETS/ICONS/PROFILEICON/WhiteProfileIcon.js";
import { FOOTER } from "../../../../RESOURCES/COMPONENTS/FOOTER/Footer.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { VIBRATION } from "../../../../RESOURCES/PLUGINS/VIBRATION/Vibration.js";

const HOMEPAGE=(DIV)=>{

    CLEAR(DIV);

    FOOTER(DIV,'HOMEFOOTER');

    DECLARATION('.HOMEFOOTER',(ELEMENT)=>{

        ICONS(ELEMENT,WHITELISTICON,'',()=>{});

        ICONS(ELEMENT,WHITEMOVIESICON,'',()=>{});

        ICONS(ELEMENT,WHITEPROFILEICON,'',()=>{

            VIBRATION(500);

        });

        STYLED(ELEMENT,'width','95%');
        STYLED(ELEMENT,'borderRadius','50px');
        STYLED(ELEMENT,'left','2%');
        STYLED(ELEMENT,'bottom','0.5rem')


        



    })

    

}

export{HOMEPAGE}