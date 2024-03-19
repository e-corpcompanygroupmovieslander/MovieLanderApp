import { ANIMATIONAPI, MOVIESPATH } from "../../../../API/Api.js";
import { WHITELISTICON } from "../../../../RESOURCES/ASSETS/ICONS/LISTICON/WhiteListIcon.js";
import { WHITEMOVIESICON } from "../../../../RESOURCES/ASSETS/ICONS/MOVIESICON/WhiteMoviesIcon.js";
import { WHITEPROFILEICON } from "../../../../RESOURCES/ASSETS/ICONS/PROFILEICON/WhiteProfileIcon.js";
import { MOVIELANDERPNG } from "../../../../RESOURCES/ASSETS/IMAGES/MOVIELANDERIMAGES/MovieLanderPng.js";
import { FOOTER } from "../../../../RESOURCES/COMPONENTS/FOOTER/Footer.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { LOADER } from "../../../../RESOURCES/COMPONENTS/LOADER/Loader.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { VIEW } from "../../../../RESOURCES/COMPONENTS/VIEW/View.js";
import { ADD } from "../../../../RESOURCES/FUNCTIONS/ADD/Add.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CREATEELEMENT } from "../../../../RESOURCES/FUNCTIONS/CREATEELEMENT/CreateElement.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { GETPACKAGE } from "../../../../RESOURCES/FUNCTIONS/GETPACKAGE/GetPackage.js";
import { REDUX } from "../../../../RESOURCES/FUNCTIONS/REDUX/Redux.js";
import { SHUFFLE } from "../../../../RESOURCES/FUNCTIONS/SHUFFLE/Shuffle.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { NOTIFICATIONS } from "../../../../RESOURCES/PLUGINS/NOTIFICATIONS/Notification.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const HOMEPAGE=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'HomeDiv');
    const HOMEDIV=document.querySelector('.HomeDiv');
    DECLARATION('.HomeDiv',(ELEMENT)=>{

        STYLED(ELEMENT,'background','transparent');

        TEXT(ELEMENT,'h3','Please Wait','Notification',()=>{})
        DECLARATION('.Notification',(ELEMENT)=>{

            STYLED(ELEMENT,'margin','70% 10%');

        })

        GETPACKAGE(ANIMATIONAPI,'cors',(data)=>{

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

                        IMAGE(ELEMENT,MOVIESPATH+element.MovieImage,'',()=>{})

                        ADD(HOMEDIV,ELEMENT);

                    })
                    
                })                

            })

        })

    })

    FOOTER(DIV,'HOMEFOOTER');

    DECLARATION('.HOMEFOOTER',(ELEMENT)=>{

        ICONS(ELEMENT,WHITELISTICON,'',()=>{});

        ICONS(ELEMENT,WHITEMOVIESICON,'',()=>{

            NOTIFICATIONS('hello','home')
           
        });

        ICONS(ELEMENT,WHITEPROFILEICON,'',()=>{

            USERACCOUNPAGE(DIV);

        });

        STYLED(ELEMENT,'width','95%');
        STYLED(ELEMENT,'borderRadius','50px');
        STYLED(ELEMENT,'left','2%');
        STYLED(ELEMENT,'bottom','0.5rem');

    })


}

export{HOMEPAGE}