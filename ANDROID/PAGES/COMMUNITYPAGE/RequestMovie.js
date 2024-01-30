import { MOVIIEREQUESTAPI, MOVIIEREQUESTEDAPI } from "../../../APIS/Api.js";
import { STYLED } from "../../../CONNECTION/Connection.js";
import { ANDROIDCOMMUNITYPAGE } from "./CommunityPage.js";

const ANDROIDREQUESTMOVIEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Requests</h1>

        </div>

        <div class='ContactUsChatDiv'>

            <img class='WhatsApp' src='${ICONS}whatsapp.png'/>

            <img class='Instagram' src='${ICONS}instagram.png'/>

            <img class='WebSite' src='${ICONS}internet.png'/>
        
        </div>

        <div class='ChatDivMessages'></div>

        <input id='RequestMovieInput' class='RequestMovieInput' type='text' placeholder='Request A Movie'/>
    
        <button id='SendRequest' class='RequestSendButton'>Send</button>

    `);

    const WHATSAPP = document.querySelector('.WhatsApp');

    WHATSAPP.addEventListener('click', () => {
        // Replace '123456789' with the actual phone number
        const phoneNumber = '726292245';

        // Create a WhatsApp URL with the phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}`;

        // Open WhatsApp in a new window or tab
        window.open(whatsappUrl, '_blank');
    });

    const INSTAGRAM=document.querySelector('.Instagram');

    INSTAGRAM.addEventListener('click',()=>{

        open('https://instagram.com/e_corpcompanygroup?igshid=YTQwZjQ0NmI0OA%3D%3D');

    })

    const WEBSITE=document.querySelector('.WebSite');

    WEBSITE.addEventListener('click',()=>{

        open('https://www.e-corpcompanygroup.com');

    })

    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDCOMMUNITYPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const COMMENTDIV = document.querySelector('.ChatDivMessages');

    DISPLAY(COMMENTDIV,`
        <img id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    `);

    fetch(MOVIIEREQUESTEDAPI)
    .then(res => res.json())
    .then(result=> {

        CLEAR(COMMENTDIV)
            
        result.forEach(element => {

            if (element.Movie) {

                if (element.Movie==='Admin') {
                    
                    const COMMENTSHOLDER = document.createElement('div');
                    COMMENTSHOLDER.classList.add('CommentsHolder')
                    DISPLAY(COMMENTSHOLDER,`
                        <h1 class='AdminName' >${element.Commentor}</h1>
                        <p class='AdminComment'>${element.Comment}</p>
                    `);
                    ADD(COMMENTDIV, COMMENTSHOLDER)

                } else {
                  
                    const COMMENTSHOLDER = document.createElement('div');
                    COMMENTSHOLDER.classList.add('CommentsHolder')
                    DISPLAY(COMMENTSHOLDER,`
                        <h1 class='CommentName' >${element.Commentor}</h1>
                        <p class='Comment'>${element.Comment}</p>
                    `);
                    ADD(COMMENTDIV, COMMENTSHOLDER)
                    
                }

            } else {
                
                DISPLAY(COMMENTDIV,`

                    <h1 class='MessageError'>No Movies Request Yet</h1>

                `);

            }

        });

            // Scroll to the bottom when new data is added
            COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
           
    })
    .catch((err) => {
        console.log(err)
    });

    const COMMENTBUTTON = document.querySelector('.RequestSendButton');
    const COMMENT = document.querySelector('.RequestMovieInput');

    COMMENT.addEventListener('input',()=>{

        if (COMMENT.value.length>=1) {
            STYLED(COMMENT,'width','70%');
            STYLED(COMMENTBUTTON,'display','block');
        } else {
            STYLED(COMMENT,'width','95%');
            STYLED(COMMENTBUTTON,'display','none');
        }

    })

    COMMENTBUTTON.addEventListener('click', () => {
        if (COMMENT.value) {
            DISPLAY(COMMENTBUTTON,`
                <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
            `);

            let SENDER='';

            let SENDERNAME='';

            if (localStorage.getItem('User')==='E19991mpt9' ||localStorage.getItem('User')==='N20011pqyt') {
                
                SENDER='Admin';

                SENDERNAME='Admin';

            } else {
                
                SENDER=localStorage.getItem('User');

                SENDERNAME=sessionStorage.getItem('UserName')
            }

            const USERDATA = {
                "Movie": SENDER,
                "Commentor": SENDERNAME,
                "Comment": COMMENT.value,
                "Date": new Date()
            }

            fetch(MOVIIEREQUESTAPI, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(USERDATA)
            })
            .then((result) => {
                fetch(MOVIIEREQUESTEDAPI)
                .then(res => res.json())
                .then(result=> {

                    COMMENT.value='';

                    DISPLAY(COMMENTBUTTON,`
                        Send
                    `);
                    CLEAR(COMMENTDIV)
                        
                    result.forEach(element => {

                if (element.Movie) {

                    if (element.Movie==='Admin') {
                        
                        const COMMENTSHOLDER = document.createElement('div');
                        COMMENTSHOLDER.classList.add('CommentsHolder')
                        DISPLAY(COMMENTSHOLDER,`
                            <h1 class='AdminName' >${element.Commentor}</h1>
                            <p class='AdminComment'>${element.Comment}</p>
                        `);
                        ADD(COMMENTDIV, COMMENTSHOLDER)

                    } else {
                      
                        const COMMENTSHOLDER = document.createElement('div');
                        COMMENTSHOLDER.classList.add('CommentsHolder')
                        DISPLAY(COMMENTSHOLDER,`
                            <h1 class='CommentName' >${element.Commentor}</h1>
                            <p class='Comment'>${element.Comment}</p>
                        `);
                        ADD(COMMENTDIV, COMMENTSHOLDER)
                        
                    }

                } else {
                    
                    DISPLAY(COMMENTDIV,`

                        <h1 class='MessageError'>No Movies Request Yet</h1>

                    `);

                }
   
                    })

                        // Scroll to the bottom when new data is added
                        COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
                       
                })
                .catch((err) => {
                    console.log(err)
                });
            }).catch((err) => {
                console.log(err)
            });
        } else {
            alert('Please Provide a comment');
        }
    });

    setInterval(() => {
        
        fetch(MOVIIEREQUESTEDAPI)
        .then(res => res.json())
        .then(result=> {

            CLEAR(COMMENTDIV)
                
            result.forEach(element => {

                if (element.Movie) {

                    if (element.Movie==='Admin') {
                        
                        const COMMENTSHOLDER = document.createElement('div');
                        COMMENTSHOLDER.classList.add('CommentsHolder')
                        DISPLAY(COMMENTSHOLDER,`
                            <h1 class='AdminName' >${element.Commentor}</h1>
                            <p class='AdminComment'>${element.Comment}</p>
                        `);
                        ADD(COMMENTDIV, COMMENTSHOLDER)

                    } else {
                      
                        const COMMENTSHOLDER = document.createElement('div');
                        COMMENTSHOLDER.classList.add('CommentsHolder')
                        DISPLAY(COMMENTSHOLDER,`
                            <h1 class='CommentName' >${element.Commentor}</h1>
                            <p class='Comment'>${element.Comment}</p>
                        `);
                        ADD(COMMENTDIV, COMMENTSHOLDER)
                        
                    }

                } else {
                    
                    DISPLAY(COMMENTDIV,`

                        <h1 class='MessageError'>No Movies Request Yet</h1>

                    `);

                }

            });

                // Scroll to the bottom when new data is added
                COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
               
        })
        .catch((err) => {
            console.log(err)
        });

    }, 5000);




}

export{ANDROIDREQUESTMOVIEPAGE}