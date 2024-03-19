import { WHITECLOSEICON } from "../../ASSETS/ICONS/CLOSEICON/WhiteCloseIcon.js";
import { ADD } from "../../FUNCTIONS/ADD/Add.js";
import { EVENT } from "../../FUNCTIONS/EVENT/Event.js";
import { STYLED } from "../../FUNCTIONS/STYLED/Styled.js";

//CREATE A WEBVIEW
const WEBVIEW=(ELEMENT,PATH)=>{

    const web=document.createElement('iframe');

    STYLED(web,'position','absolute');
    STYLED(web,'width','100%');
    STYLED(web,'height','100%');
    STYLED(web,'top','0');
    STYLED(web,'bottom','0');
    STYLED(web,'overflowX','hidden');
    STYLED(web,'overflowY','auto');
    STYLED(web,'display','block');
    STYLED(web,'background','black');
    STYLED(web,'border','none');

    //CREATE ICON
    const Image=document.createElement('img');
    Image.src=WHITECLOSEICON;
    //STYLE
    STYLED(Image,'position','absolute');
    STYLED(Image,'background','#00000080');
    STYLED(Image,'width','25px');
    STYLED(Image,'height','25px');
    STYLED(Image,'top','5px');
    STYLED(Image,'right','5px');
    STYLED(Image,'padding','5px');
    STYLED(Image,'borderRadius','20px');
    STYLED(Image,'display','block')

    web.src=PATH;

    EVENT(Image,'click',()=>{

        STYLED(web,'display','none');
        STYLED(Image,'display','none');

    })

    ADD(ELEMENT,web);
    
    ADD(ELEMENT,Image);

}

export{WEBVIEW}