//SAFE AREA VIEW BUTTON
const SAFEAREAVIEWBUTTON=(ELEMENT)=>{

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
    holder.innerHTML='Safe Area View'

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
    image.src=WHITEBOTTOMNAVIGATIONICON;

    button.append(image);

    button.addEventListener('click',()=>{

        CHECK(localStorage.getItem('SAFEAREAVIEW'),(result)=>{

            CONDITIONER(result,'FALSE',

            ()=>STORE('local','SAFEAREAVIEW','TRUE'),

            ()=>STORE('local','SAFEAREAVIEW','FALSE')

            )

            SAFEAREAVIEW()

            CONDITIONER(result,'FALSE',

            ()=>MESSAGE('','Safe Area Enabled',2000,'On'),

            ()=>MESSAGE('','Safe Area Disabled',2000,'On')
            )

        })

    })

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,button),
        ()=>ADD('',button)
    )
    
}

//NOTIFICATIONS BUTTON
const NOTIFICATIONSBUTTON=(ELEMENT)=>{

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
    holder.innerHTML='App Notifications'

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
    image.src=WHITENOTIFICATIONICON;

    button.append(image);

    button.addEventListener('click',()=>{

        CHECK(localStorage.getItem('AppNotifications'),(result)=>{

            CONDITIONER(result,'FALSE',

            ()=>STORE('local','AppNotifications','TRUE'),

            ()=>STORE('local','AppNotifications','FALSE')

            )

            SAFEAREAVIEW()

            CONDITIONER(result,'FALSE',

            ()=>MESSAGE('','Notifications Enabled',2000,'On'),

            ()=>MESSAGE('','Notifications  Disabled',2000,'On')
            )

        })

    })

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,button),
        ()=>ADD('',button)
    )
    
}

