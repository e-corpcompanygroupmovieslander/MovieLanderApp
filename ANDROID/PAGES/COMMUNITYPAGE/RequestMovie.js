import { ANDROIDCOMMUNITYPAGE } from "./CommunityPage.js";

const ANDROIDREQUESTMOVIEPAGE=(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE)=>{

    CLEAR(DIV);

    DISPLAY(DIV,`

        <div class='AndroidHeader'>

            <img class='BackIcon' src='${ICONS}back.png'/>

            <h1 class='Payments'>Requests</h1>

        </div>

        <div class='ChatDivMessages'></div>

        <input class='RequestMovieInput' type='text' placeholder='Request A Movie'/>
    
        <button class='RequestSendButton'>Send</button>

    `);

    
    const BACKICON=document.querySelector('.BackIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDCOMMUNITYPAGE(DIV,ADD,CLEAR,DISPLAY,ICONS,ADVANCE);

    })

    const COMMENTDIV = document.querySelector('.ChatDivMessages');

    DISPLAY(COMMENTDIV,`
        <img id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    `);

    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=nXMhppWJckaAyXaZy6D__S0lqeR0atqSxAq1kOkk2GEnJWWQ52CPfpL7F9U8Vd-wdwSw_qpzVpQfuKi-IxfflDFevpOXFM4Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDR547rJpn-Psy8MhiNxA-XQ-PS5P5L6nk8-Qayof4LLnMQUyXJJ2RPUI3gNjWu4MkYFRvveLc41ggslj1gFlVzYr3vgDTt1Fw&lib=MR-C6dZ5Kz2htDo2AXf6_I-zilWmV86UI')
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

    COMMENTBUTTON.addEventListener('click', () => {
        if (COMMENT.value) {
            DISPLAY(COMMENTBUTTON,`
                <img  id='LoadingIcon' class='LoadingIcon' src='${ICONS}loading.png'/>
            `);

            if (localStorage.getItem('User')==='') {
                
            } else {
                
            }

            const USERDATA = {
                "Movie": localStorage.getItem('User'),
                "Commentor": sessionStorage.getItem('UserName'),
                "Comment": COMMENT.value,
                "Date": new Date()
            }

            fetch('https://script.google.com/macros/s/AKfycbxSMyblhcQKYRvLsPCy5f1raiwW_nNQlkeveIxspjkWF3odNlyVsVevQ1ErqiJRQJtO/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(USERDATA)
            })
            .then((result) => {
                fetch('https://script.googleusercontent.com/macros/echo?user_content_key=KuQ0_mrBO_3CmTQh5IK8yz7RaG-eVNka0NIVZxLCdH6PvGt9n_FaT6m3ZwWT4iLBU6MCr8AMkQZEdrG-c3iahcubmkTZxa0Gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEs7UJ0dlvB27hDMA137eagoFAsTqY-HPehJ5_2CaZu1n_yZTcsRd6NJ4kiwA9VyeDiWxKZD0X-nujIekQxU0gNOSwMBEY_a-tz9Jw9Md8uu&lib=MZgXdYXtlqVeWWvMj2IqGu-zilWmV86UI')
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
        
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=KuQ0_mrBO_3CmTQh5IK8yz7RaG-eVNka0NIVZxLCdH6PvGt9n_FaT6m3ZwWT4iLBU6MCr8AMkQZEdrG-c3iahcubmkTZxa0Gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEs7UJ0dlvB27hDMA137eagoFAsTqY-HPehJ5_2CaZu1n_yZTcsRd6NJ4kiwA9VyeDiWxKZD0X-nujIekQxU0gNOSwMBEY_a-tz9Jw9Md8uu&lib=MZgXdYXtlqVeWWvMj2IqGu-zilWmV86UI')
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