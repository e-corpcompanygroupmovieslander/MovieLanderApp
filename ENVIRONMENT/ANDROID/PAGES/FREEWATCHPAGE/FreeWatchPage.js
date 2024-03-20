import { FREEMOVIESAPI, MOVIESPATH } from "../../../../API/Api.js";
import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { LOADER } from "../../../../RESOURCES/COMPONENTS/LOADER/Loader.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { ADD } from "../../../../RESOURCES/FUNCTIONS/ADD/Add.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CREATEELEMENT } from "../../../../RESOURCES/FUNCTIONS/CREATEELEMENT/CreateElement.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { GETPACKAGE } from "../../../../RESOURCES/FUNCTIONS/GETPACKAGE/GetPackage.js";
import { REDUX } from "../../../../RESOURCES/FUNCTIONS/REDUX/Redux.js";
import { SHUFFLE } from "../../../../RESOURCES/FUNCTIONS/SHUFFLE/Shuffle.js";
import { STORE } from "../../../../RESOURCES/FUNCTIONS/STORE/Store.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { MOVIESDATAPAGE } from "../MOVIESDATAPAGE/MoviesDataPage.js";


const FREEWATCHPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');
    const HOMEDIV=document.querySelector('.Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        LOADER(ELEMENT,10000,'HOMELOADER');

        DECLARATION('.HOMELOADER',(ELEMENT)=>{

            STYLED(ELEMENT,'bottom','300px')
            
        })

        GETPACKAGE(FREEMOVIESAPI,'cors',(data)=>{

            CLEAR(HOMEDIV);

            SHUFFLE(data,(data)=>{
              
                REDUX(data,(element)=>{

                    CREATEELEMENT('div',(ELEMENT)=>{

                        //STYLES
                        STYLED(ELEMENT,'position','relative');
                        STYLED(ELEMENT,'width','80%');
                        STYLED(ELEMENT,'height','60%');
                        STYLED(ELEMENT,'background','transparent')
                        STYLED(ELEMENT,'left','10%');
                        STYLED(ELEMENT,'marginTop','1.5rem');
                        STYLED(ELEMENT,'marginBottom','0.5rem');
                        STYLED(ELEMENT,'borderRadius','10px');
                        STYLED(ELEMENT,'overFlow','hidden');

                        IMAGE(ELEMENT,MOVIESPATH+element.MovieImage,'',()=>{

                            STORE('','BackPath','Free');
                            STORE('','MovieData',JSON.stringify(element));

                            MOVIESDATAPAGE(DIV);

                        })

                        ADD(HOMEDIV,ELEMENT);

                    })
                    
                })                

            })

        })

        
           
    })

    HEADER(DIV,'AppHeader');

    DECLARATION('.AppHeader',(ELEMENT)=>{
        STYLED(ELEMENT,'background','Transparent');
        ICONS(ELEMENT,WHITEBACKICON,'BackIcon',()=>{
            HOMEPAGE(DIV);
        })
        DECLARATION('.BackIcon',(ELEMENT)=>{
            STYLED(ELEMENT,'marginLeft','1rem');
            STYLED(ELEMENT,'width','20px');
            STYLED(ELEMENT,'height','20px');
        })
        TEXT(ELEMENT,'h2','Free Watch','Profile',()=>{})
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

export{FREEWATCHPAGE}