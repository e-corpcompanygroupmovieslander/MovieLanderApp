import { ADD, APPMODE, CHECK, CONDITION, CONDITIONER, STYLED } from "../../CONNECTION/Connection.js";


//APP MODE BUTTON
const APPMODEBUTTON=(ELEMENT,COLOR,DEFAULT)=>{

    const button=document.createElement('button');
    
    //STYLES
    STYLED(button,'height','50px');
    STYLED(button,'width','95%');
    STYLED(button,'borderRadius','10px');
    STYLED(button,'border','none');
    STYLED(button,'outline','none');
    STYLED(button,'color','white');
    STYLED(button,'background','#00000080');
    STYLED(button,'position','relative');
    STYLED(button,'display','inline-flex');
    STYLED(button,'left','2%');
    STYLED(button,'marginTop','0.3rem');
    STYLED(button,'marginBottom','0.3rem');
    STYLED(button,'textAlign','left');

    //CREATE THE LABEL
    const holder = document.createElement('h3');

    STYLED(holder, 'position', 'relative');
    STYLED(holder, 'color', '#ffffff');
    STYLED(holder, 'textAlign', 'left');
    STYLED(holder, 'marginLeft', '1rem');
    STYLED(holder, 'marginRight', 'auto');
    holder.innerHTML='App Mode';

    button.append(holder)

    //CREATEICON
    const image = document.createElement('img');

    //STYLES
    STYLED(image,'position','relative');
    STYLED(image,'width','25px');
    STYLED(image,'height','25px');
    STYLED(image,'padding','5px');
    STYLED(image,'objectFit','cover');
    STYLED(image,'outline','none');
    STYLED(image,'border','none');
    STYLED(image,'marginTop','auto');
    STYLED(image,'marginBottom','auto');
    STYLED(image,'marginLeft','auto');
    STYLED(image,'marginRight','1rem');

    //IMAGE PATH
    image.src=WHITEAPPMODEICON;

    ADD(button,image);

    button.addEventListener('click',()=>{

        CHECK(localStorage.getItem('AppColour'),(result)=>{
            CONDITIONER(result,DEFAULT,
            ()=>APPMODE('','',COLOR),
            ()=>APPMODE('','',DEFAULT)
            )
        }) 
        
    })

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,button),
        ()=>ADD('',button)
    )
    
}

export{APPMODEBUTTON}