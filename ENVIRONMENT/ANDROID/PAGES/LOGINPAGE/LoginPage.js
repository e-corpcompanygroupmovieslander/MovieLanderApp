import { LOGINAPI } from "../../../../API/Api.js";
import { MOVIELANDERPNG } from "../../../../RESOURCES/ASSETS/IMAGES/MOVIELANDERIMAGES/MovieLanderPng.js";
import { BUTTON } from "../../../../RESOURCES/COMPONENTS/BUTTON/Button.js";
import { IMAGE } from "../../../../RESOURCES/COMPONENTS/IMAGE/Image.js";
import { INPUT } from "../../../../RESOURCES/COMPONENTS/INPUT/Input.js"
import { LOADER } from "../../../../RESOURCES/COMPONENTS/LOADER/Loader.js";
import { MESSAGE } from "../../../../RESOURCES/COMPONENTS/MESSAGE/Message.js";
import { TEXT } from "../../../../RESOURCES/COMPONENTS/TEXT/Text.js"
import { BREAK } from "../../../../RESOURCES/FUNCTIONS/BREAK/Break.js";
import { CHECK } from "../../../../RESOURCES/FUNCTIONS/CHECK/Check.js";
import { CLEAR } from "../../../../RESOURCES/FUNCTIONS/CLEAR/Clear.js"
import { CONDITION } from "../../../../RESOURCES/FUNCTIONS/CONDITION/Condition.js";
import { CONDITIONER } from "../../../../RESOURCES/FUNCTIONS/CONDITIONER/Conditioner.js";
import { DECLARATION } from "../../../../RESOURCES/FUNCTIONS/DECLARATION/Declaration.js";
import { FINDER } from "../../../../RESOURCES/FUNCTIONS/FINDER/Finder.js";
import { GETPACKAGE } from "../../../../RESOURCES/FUNCTIONS/GETPACKAGE/GetPackage.js";
import { STORE } from "../../../../RESOURCES/FUNCTIONS/STORE/Store.js";
import { STYLED } from "../../../../RESOURCES/FUNCTIONS/STYLED/Styled.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const LOGINPAGE=(DIV)=>{

    BREAK(DIV);

    CLEAR(DIV);

    IMAGE(DIV,MOVIELANDERPNG,'AppImage',()=>{})   
    
    DECLARATION('.AppImage',(ELEMENT)=>{
        STYLED(ELEMENT,'width','30%');
        STYLED(ELEMENT,'height','auto');
        STYLED(ELEMENT,'padding','15% 5%');
        STYLED(ELEMENT,'margin','2% 30%');
        
    })

    INPUT(DIV,'email','Enter User Email','UserEmail');

    INPUT(DIV,'password','Enter User Email','UserPassword');

    TEXT(DIV,'h3','ForgotPassword?','Forgot',()=>{})
    DECLARATION('.Forgot',(ELEMENT)=>{
        STYLED(ELEMENT,'margin','1% 55% ');      
    })

    BUTTON(DIV,'LogIn','','',()=>{

        CONDITIONER(navigator.onLine,false,

            ()=>MESSAGE(DIV,'Your Offline,Check Your Internet Connection',''),

            ()=>DECLARATION('.UserEmail',(ELEMENT)=>{

                CHECK(ELEMENT.value,(result)=>{

                    CONDITIONER(result,false,

                        ()=>MESSAGE(DIV,'Email Cannot Be Empty',''),

                        ()=>DECLARATION('.UserPassword',(ELEMENT)=>{
                           
                            CHECK(ELEMENT.value,(result)=>{

                                CONDITIONER(result,false,

                                    ()=>MESSAGE(DIV,'Password Cannot Be Empty',''),

                                    ()=>LOADER(DIV,3000),GETPACKAGE(LOGINAPI,'cors',(data)=>{
                                        
                                        const EMAIL=document.querySelector('.UserEmail');const PASS=document.querySelector('.UserPassword');

                                        FINDER(data,'Email',EMAIL.value,(user)=>{

                                            CONDITIONER(user,false,

                                                ()=>MESSAGE(DIV,'Wrong User Email',''),

                                                ()=>CONDITIONER(user.Password,PASS.value,

                                                    ()=>CHECK(user,(result)=>{

                                                        STORE('local','User',result.SecretCode);

                                                        HOMEPAGE(DIV);
                                                        
                                                    }),

                                                    ()=>MESSAGE(DIV,'Wrong User Password','')
                                                    
                                                )
                                                
                                            )

                                        })

                                    })
                                    
                                )
                                
                            })
                            
                        })
                        
                    )

                })

            })

        )
        
    })
    
    BUTTON(DIV,'Create Account','','',()=>{
        
    })

    
    
}

export{LOGINPAGE}