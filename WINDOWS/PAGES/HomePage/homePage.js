import { LOGINAPI } from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { WINDOWSADVERST } from "../../FUNCTIONS/ADVERTSPAGE/Adverts.js";
import { WINDOWSLOGINPAGE } from "../LoginPage/LoginPage.js";

const WINDOWSHOMEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
    <di class='WindowsHeader'>

        <input class='WindowsInputHolder' type="search" placeholder='Search here' >
        
        <div class='WindowsrightHolder'>

            <img src='${ICONS}notifications.png' class=''/>

            <img src='${ICONS}sun.png' class='WindowsLight'/>

            <img src='${ICONS}moon.png' class='WindowsDark'/>

            <img src='${ICONS}user.png' class='UserProfile'/>

        </div>

    </div>

    <div class='WindowsLeftDivHolder'>

        <img src='${ICONS}home.png' class='HomeIcons'/>

        <img src='${ICONS}list.png' class='HomeIcons'/>

        <img src='${ICONS}movies.png' class='HomeIcons'/>

        <img src='${ICONS}save.png' class='HomeIcons'/>

        <img src='${ICONS}chat.png' class='HomeIcons'/>

        <img src='${ICONS}setting.png' class='HomeIcons'/>
    
    </div>

    <div class='WindowsDataDiv'></div>

    <div class='WindowsUserAccountDiv'>

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <img class='LightModeIcon' src='${ICONS}profile.png'/>

        </div>

        <div class='MyDataHolder'></div>
        
    </div>
   

    `);

    //APP STARTS
    WINDOWSADVERST(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    //APPMODES

    const LIGHTMODE=document.querySelector('.WindowsLight');

    const DARKMODE=document.querySelector('.WindowsDark');

    if (localStorage.getItem('ModeColour')==='#5C829A') {

        STYLED(DARKMODE,'display','block');

        STYLED(LIGHTMODE,'display','none');
        
   

    } else {
        
        STYLED(LIGHTMODE,'display','block');

        STYLED(DARKMODE,'display','none');
       
    }

    LIGHTMODE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','ModeColour','#212121');

        DIV.style.background='#212121';

        STYLED(DARKMODE,'display','block');

        STYLED(LIGHTMODE,'display','none');

    })

    DARKMODE.addEventListener('click',()=>{

        ADVANCE.ADDSTORAGE('local','ModeColour','#5C829A');

        STYLED(LIGHTMODE,'display','block');

        STYLED(DARKMODE,'display','none');

        DIV.style.background='#5C829A';

    })

    //GET USERS PROFILE DATA
    const USERPROFILE=document.querySelector('.UserProfile');

    const USERACCOUNTDIV=document.querySelector('.WindowsUserAccountDiv');

    const MyDataHolder=document.querySelector('.MyDataHolder');

    USERPROFILE.addEventListener('click',()=>{

        STYLED(USERACCOUNTDIV,'background',localStorage.getItem('ModeColour'));

        STYLED(USERACCOUNTDIV,'width','30%');

        DISPLAY(MyDataHolder,`

        <img id='freeLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
        
        `)

        fetch(LOGINAPI)

        .then(res=>res.json())

        .then((result) => {


            CLEAR(MyDataHolder)

            const user = result.find(user => user.SecretCode === localStorage.getItem('User'));
                
            if (user) {
                
                DISPLAY(MyDataHolder,`

                <br>
                
                <button>${user.UserName}</button>

                <br>
                
                <button>${user.Email}</button>

                <br>
                
                <button>${user.Telephone}</button>

                <br>
                
                <button>${user.Location}</button>

                <br>
                
                <button class='SignOut'>Sign Out</button>
                
                `);

                const SIGNOUT=document.querySelector('.SignOut');

                SIGNOUT.addEventListener('click',()=>{
            
                    localStorage.removeItem('User');
            
                    WINDOWSLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);
            
                })
                
            } else {
                
                localStorage.removeItem('User');

                WINDOWSLOGINPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

            }
            
        }).catch((err) => {
            console.log(err)
        });



    })

    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{
        
        STYLED(USERACCOUNTDIV,'width','0%');

    })




}

export{WINDOWSHOMEPAGE}
