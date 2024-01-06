const WINDOWSHOMEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`
    
    <div class='WindowsHeader'>

        <img src='${ICONS}moon.png' class=''/>

        <img src='${ICONS}sun.png' class=''/>

        <img src='${ICONS}user.png' class=''/>

    
    </div>

    <div class='WindowsDivHolder'></div>

    `)

}

export{WINDOWSHOMEPAGE}