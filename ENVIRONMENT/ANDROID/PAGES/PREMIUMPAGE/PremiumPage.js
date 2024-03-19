import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITELOCKICON } from "../../../../RESOURCES/ASSETS/ICONS/LOCKICON/WhiteLockIcon.js";
import { MOVIELANDERPNG } from "../../../../RESOURCES/ASSETS/IMAGES/MOVIELANDERIMAGES/MovieLanderPng.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { BREAK } from "../../../../RESOURCES/FUNCTIONS/BREAK/Break.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CONDITIONER } from "../../../../RESOURCES/FUNCTIONS/CONDITIONER/Conditioner.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { RANDOMCODE } from "../../../../RESOURCES/FUNCTIONS/RANDOMCODE/RandomCode.js";
import { SHUFFLE } from "../../../../RESOURCES/FUNCTIONS/SHUFFLE/Shuffle.js";
import { STORE } from "../../../../RESOURCES/FUNCTIONS/STORE/Store.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { PESAPALENVIRONMENT } from "../../../../RESOURCES/PACKAGES/PESAPAL/ENVIRONMENT/PesaPalEnvironment.js";
import { USERACCOUNPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";
import { DAILYPREMIUMPAGE } from "./DailyPremiumPage.js";
import { MONTHLYPAYMENT } from "./MonthlyPremiumPage.js";
import { WEEKLYPAYMENT } from "./WeeklyPremiumPage.js";
import { YEARLYPAYMENT } from "./YearlyPremiumPage.js";


const PREMIUMPAGE=(DIV)=>{

    const Numbers=[

        1,2,3,4,5,6,7,8,9,0,
        2,3,4,5,6,7,8,9,0,1,
        3,4,5,6,7,8,9,0,1,2,
        4,5,6,7,8,9,0,1,2,3,
        5,6,7,8,9,0,1,2,3,4,
        6,7,8,9,0,1,2,3,4,5,
        7,8,9,0,1,2,3,4,5,6,
        8,9,0,1,2,3,4,5,6,7,
        9,0,1,2,3,4,5,6,7,8,
        0,1,2,3,4,5,6,7,8,9

    ]

    SHUFFLE(Numbers,(data)=>{

        STORE('','Site',data);

    })

    PESAPALENVIRONMENT('');

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

        TEXT(ELEMENT,'h2','Subscription Plan','SubsrciptionPlan',()=>{})

        BREAK(ELEMENT);BREAK(ELEMENT);

        BUTTON(ELEMENT,'Daily',WHITELOCKICON,'',()=>{

            CONDITIONER(localStorage.getItem('Location'),'Uganda',

            ()=>STORE('','Currency','UGX'),
    
            ()=>STORE('','Currency','USD')
            
            )
    
            CONDITIONER(localStorage.getItem('Location'),'Uganda',
    
            ()=>STORE('','Amount','1000'),
    
            ()=>STORE('','Amount','1')
            
            )

            DAILYPREMIUMPAGE(DIV);
        
        });

        BUTTON(ELEMENT,'Weekly',WHITELOCKICON,'',()=>{

            CONDITIONER(localStorage.getItem('Location'),'Uganda',

            ()=>STORE('','Currency','UGX'),
    
            ()=>STORE('','Currency','USD')
            
            )
    
            CONDITIONER(localStorage.getItem('Location'),'Uganda',
    
            ()=>STORE('','Amount','5000'),
    
            ()=>STORE('','Amount','4')
            
            )

            WEEKLYPAYMENT(DIV);

        });

        BUTTON(ELEMENT,'Monthly',WHITELOCKICON,'',()=>{

            CONDITIONER(localStorage.getItem('Location'),'Uganda',

            ()=>STORE('','Currency','UGX'),
    
            ()=>STORE('','Currency','USD')
            
            )
    
            CONDITIONER(localStorage.getItem('Location'),'Uganda',
    
            ()=>STORE('','Amount','25000'),
    
            ()=>STORE('','Amount','20')
            
            )

            MONTHLYPAYMENT(DIV);

        });

        BUTTON(ELEMENT,'Yearly',WHITELOCKICON,'',()=>{

            CONDITIONER(localStorage.getItem('Location'),'Uganda',

            ()=>STORE('','Currency','UGX'),
    
            ()=>STORE('','Currency','USD')
            
            )
    
            CONDITIONER(localStorage.getItem('Location'),'Uganda',
    
            ()=>STORE('','Amount','150000'),
    
            ()=>STORE('','Amount','100')
            
            )

            YEARLYPAYMENT(DIV);

        });
      
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
        TEXT(ELEMENT,'h2','Subscription','Subscription',()=>{})
        DECLARATION('.Subscription',(ELEMENT)=>{
            STYLED(ELEMENT,'fontSize','20px');
            STYLED(ELEMENT,'marginTop','auto');
            STYLED(ELEMENT,'marginBottom','auto');
            STYLED(ELEMENT,'marginRight','1rem');

        })
    })
    
}

export{PREMIUMPAGE}