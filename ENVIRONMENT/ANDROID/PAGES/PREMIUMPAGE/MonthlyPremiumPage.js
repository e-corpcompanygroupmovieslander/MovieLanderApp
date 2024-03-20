import { KEY, REDIRECTSITE, SECRET, SITE } from "../../../../API/PesaPalApi.js";
import { WHITEBACKICON } from "../../../../RESOURCES/ASSETS/ICONS/BACKICON/WhiteBackIcon.js";
import { WHITECHECKICON } from "../../../../RESOURCES/ASSETS/ICONS/CHECKICON/WhiteCheckIcon.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { HEADER } from "../../../../RESOURCES/COMPONENTS/HEADER/Header.js";
import { ICONS } from "../../../../RESOURCES/COMPONENTS/ICONS/Icons.js";
import { LOADER } from "../../../../RESOURCES/COMPONENTS/LOADER/Loader.js";
import { MESSAGE } from "../../../../RESOURCES/COMPONENTS/MESSAGE/Message.js";
import { SCROLLVIEW } from "../../../../RESOURCES/COMPONENTS/SCROLLVIEW/ScrollView.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js";
import { WEBVIEW } from "../../../../RESOURCES/COMPONENTS/WEBVIEW/WebView.js";
import { BREAK } from "../../../../RESOURCES/FUNCTIONS/BREAK/Break.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CONDITIONER } from "../../../../RESOURCES/FUNCTIONS/CONDITIONER/Conditioner.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { PESAPALREGISTERIPN } from "../../../../RESOURCES/PACKAGES/PESAPAL/REGISTER/PesaPalIpnRegistration.js";
import { PESAPALSUMBITORDER } from "../../../../RESOURCES/PACKAGES/PESAPAL/SUMBIT/PesaPalPayment.js";
import { PESAPALTOKEN } from "../../../../RESOURCES/PACKAGES/PESAPAL/TOKEN/PesaPalToken.js";
import { PREMIUMPAGE } from "./PremiumPage.js";

const MONTHLYPAYMENT=(DIV)=>{

    CLEAR(DIV);

    SCROLLVIEW(DIV,'Holder');

    DECLARATION('.Holder',(ELEMENT)=>{

        STYLED(ELEMENT,'top','50px');
        STYLED(ELEMENT,'background','Transparent');

        BREAK(ELEMENT),BREAK(ELEMENT),BREAK(ELEMENT);

        TEXT(ELEMENT,'h3','PREMIUM FEATURES','',()=>{});


        BREAK(ELEMENT),BREAK(ELEMENT),BREAK(ELEMENT);

        TEXT(ELEMENT,'p','Get Access To the Features Below','',()=>{});

        BREAK(ELEMENT);

        BUTTON(ELEMENT,'All Movies',WHITECHECKICON,'',()=>{});

        BUTTON(ELEMENT,'Community Access',WHITECHECKICON,'',()=>{});

        BUTTON(ELEMENT,'Reviews',WHITECHECKICON,'',()=>{});

        BUTTON(ELEMENT,'1 Week Extra',WHITECHECKICON,'',()=>{});

        BREAK(ELEMENT);
        
        TEXT(ELEMENT,'p', `Pay ${sessionStorage.getItem('Amount')}${sessionStorage.getItem('Currency')} Valid For One Month`,'',()=>{});

        BUTTON(ELEMENT,'Subscribe','','',()=>{

            PESAPALTOKEN(KEY,SECRET,(result)=>{

                CONDITIONER(result.message,'Request processed successfully',
                
                ()=>LOADER(DIV,5000),PESAPALREGISTERIPN(result.token,SITE,(result,TOKEN)=>{

                    console.log(result)

                    CONDITIONER(result.ipn_status_decription,'Active',

                    ()=>PESAPALSUMBITORDER(TOKEN,result.id,result.ipn_id,REDIRECTSITE,(result)=>{

                        CONDITIONER(result.status,'200',

                        ()=>WEBVIEW(DIV,result.redirect_url),

                        ()=>MESSAGE(DIV,'Something went Wrong','')
                        
                        )

                        console.log(result)
                    }),

                    ()=>MESSAGE(DIV,'Something went Wrong','')
                    
                    )

                }
                
                ),

                ()=>MESSAGE(DIV,'Something went Wrong','')
                
                )

            })
        
        });

        BUTTON(ELEMENT,'Cancel','','',()=>{PREMIUMPAGE(DIV)});
              
    })

    HEADER(DIV,'AppHeader');

    DECLARATION('.AppHeader',(ELEMENT)=>{
        STYLED(ELEMENT,'background','Transparent');
        ICONS(ELEMENT,WHITEBACKICON,'BackIcon',()=>{
            PREMIUMPAGE(DIV);
        })
        DECLARATION('.BackIcon',(ELEMENT)=>{
            STYLED(ELEMENT,'marginLeft','1rem');
            STYLED(ELEMENT,'width','20px');
            STYLED(ELEMENT,'height','20px');
        })
        TEXT(ELEMENT,'h2','Monthly','Profile',()=>{})
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

export{MONTHLYPAYMENT}