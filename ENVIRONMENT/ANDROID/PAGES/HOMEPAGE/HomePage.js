import { ANIMATIONAPI } from "../../../../API/Api.js";
import { WHITELISTICON } from "../../../../RESOURCES/ASSETS/ICONS/LISTICON/WhiteListIcon.js";
import { WHITEMOVIESICON } from "../../../../RESOURCES/ASSETS/ICONS/MOVIESICON/WhiteMoviesIcon.js";
import { WHITEPROFILEICON } from "../../../../RESOURCES/ASSETS/ICONS/PROFILEICON/WhiteProfileIcon.js";
import { FOOTER } from "../../../../RESOURCES/COMPONENTS/FOOTER/Footer.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { ADD } from "../../../../RESOURCES/FUNCTIONS/ADD/Add.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CREATEELEMENT } from "../../../../RESOURCES/FUNCTIONS/CREATEELEMENT/CreateElement.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { EVENT } from "../../../../RESOURCES/FUNCTIONS/EVENT/Event.js";
import { GETPACKAGE } from "../../../../RESOURCES/FUNCTIONS/GETPACKAGE/GetPackage.js";
import { REDUX } from "../../../../RESOURCES/FUNCTIONS/REDUX/Redux.js";
import { SHUFFLE } from "../../../../RESOURCES/FUNCTIONS/SHUFFLE/Shuffle.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { NOTIFICATIONS } from "../../../../RESOURCES/PLUGINS/NOTIFICATIONS/Notification.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const HOMEPAGE=(DIV)=>{

    CLEAR(DIV);

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



        GETPACKAGE(ANIMATIONAPI,'cors',(data)=>{
            
            SHUFFLE(data,(data)=>{

                REDUX(data,(element)=>{
                    console.log(element)

                    CREATEELEMENT('div','gg',(ELEMENT)=>{

                        STYLED(ELEMENT,'position','1rem');
                        STYLED(ELEMENT,'display','block');
                        STYLED(ELEMENT,'width','95%');
                        STYLED(ELEMENT,'height','30%');
                        STYLED(ELEMENT,'marginTop','1rem');
                        STYLED(ELEMENT,'marginBottom','1rem');
                        STYLED(ELEMENT,'left','1rem');
                        STYLED(ELEMENT,'background','red');

                        ADD(DIV,ELEMENT);
                        
                    })

                  
                    

                    

                    

                    
                })

            })
            

        })


        
       
 

        



    })

    

    

}

export{HOMEPAGE}