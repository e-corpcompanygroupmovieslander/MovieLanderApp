import { MOVIESETUPPAGE } from "./MovieSetUpPage.js";

const ANDROIDCOMMENTDIV = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, element) => {

    CLEAR(DIV);

    DISPLAY(DIV,`
        <div class='CommentsDiv'></div>
        <div class='AndroidHeader'>
            <img class='BackIcon' src='${ICONS}back.png'/>
            <h1 class='MovieNameComment'>${element.MovieName}</h1>
        </div>
        <input id='RequestMovieInput' class='RequestMovieInput' type='text' placeholder='My Comment'/>
        <button id='SendRequest' class='RequestSendButton'>Send</button>
    `);

    if (localStorage.getItem('Device')==='Android') {

        StatusBar.backgroundColorByHexString(localStorage.getItem('ModeColour'));
        
    } else {
       
        console.log('Android Version Changed Colour');
        
    }

    const BACKICON = document.querySelector('.BackIcon');

    BACKICON.addEventListener('click', () => {
        MOVIESETUPPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, element);
    });

    const COMMENTDIV = document.querySelector('.CommentsDiv');

    DISPLAY(COMMENTDIV,`
        <img id='UserLoading' class='LoadingIcon' src='${ICONS}loading.png'/>
    `);

    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=nXMhppWJckaAyXaZy6D__S0lqeR0atqSxAq1kOkk2GEnJWWQ52CPfpL7F9U8Vd-wdwSw_qpzVpQfuKi-IxfflDFevpOXFM4Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDR547rJpn-Psy8MhiNxA-XQ-PS5P5L6nk8-Qayof4LLnMQUyXJJ2RPUI3gNjWu4MkYFRvveLc41ggslj1gFlVzYr3vgDTt1Fw&lib=MR-C6dZ5Kz2htDo2AXf6_I-zilWmV86UI')
    .then(res => res.json())
    .then((result) => {
        CLEAR(COMMENTDIV)
        const user = result.find(user => user.Movie === localStorage.getItem('MovieId'));
        if (user) {
            result.forEach(element => {
                if (element.Movie === localStorage.getItem('MovieId')) {
                    const COMMENTSHOLDER = document.createElement('div');
                    COMMENTSHOLDER.classList.add('CommentsHolder')
                    DISPLAY(COMMENTSHOLDER,`
                        <h1 class='CommentName' >${element.Commentor}</h1>
                        <p class='Comment'>${element.Comment}</p>
                    `);
                    ADD(COMMENTDIV, COMMENTSHOLDER)
                } 
            });
            // Scroll to the bottom when new data is added
            COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
        } else {
            DISPLAY(COMMENTDIV,`
                <h1 class='MessageError'>No Comments For This Movie</h1>
            `);
        }
    }).catch((err) => {
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

            const USERDATA = {
                "Movie": localStorage.getItem('MovieId'),
                "Commentor": sessionStorage.getItem('UserName'),
                "Comment": COMMENT.value,
                "Date": new Date()
            }

            fetch('https://script.google.com/macros/s/AKfycbw8PqJXQKKACLCN3MyBhdXaQzB9prrmvqyQhH1sH3F4jdCjWFHxT7t5IjLVY1fozQRiBg/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(USERDATA)
            })
            .then((result) => {
                fetch('https://script.googleusercontent.com/macros/echo?user_content_key=nXMhppWJckaAyXaZy6D__S0lqeR0atqSxAq1kOkk2GEnJWWQ52CPfpL7F9U8Vd-wdwSw_qpzVpQfuKi-IxfflDFevpOXFM4Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDR547rJpn-Psy8MhiNxA-XQ-PS5P5L6nk8-Qayof4LLnMQUyXJJ2RPUI3gNjWu4MkYFRvveLc41ggslj1gFlVzYr3vgDTt1Fw&lib=MR-C6dZ5Kz2htDo2AXf6_I-zilWmV86UI')
                .then(res => res.json())
                .then((result) => {

                    COMMENT.value='';

                    DISPLAY(COMMENTBUTTON,`
                        Send
                    `);
                    CLEAR(COMMENTDIV)
                    const user = result.find(user => user.Movie === localStorage.getItem('MovieId'));
                    if (user) {
                        result.forEach(element => {
                            if (element.Movie === localStorage.getItem('MovieId')) {
                                const COMMENTSHOLDER = document.createElement('div');
                                COMMENTSHOLDER.classList.add('CommentsHolder')
                                DISPLAY(COMMENTSHOLDER,`
                                    <h1 class='CommentName' >${element.Commentor}</h1>
                                    <p class='Comment'>${element.Comment}</p>
                                `);
                                ADD(COMMENTDIV, COMMENTSHOLDER)
                            } 
                        });
                        // Scroll to the bottom when new data is added
                        COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
                    } else {
                        DISPLAY(COMMENTDIV,`
                            <h1 class='MessageError'>No Comments For This Movie</h1>
                        `);
                    }
                }).catch((err) => {
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
        
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=nXMhppWJckaAyXaZy6D__S0lqeR0atqSxAq1kOkk2GEnJWWQ52CPfpL7F9U8Vd-wdwSw_qpzVpQfuKi-IxfflDFevpOXFM4Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDR547rJpn-Psy8MhiNxA-XQ-PS5P5L6nk8-Qayof4LLnMQUyXJJ2RPUI3gNjWu4MkYFRvveLc41ggslj1gFlVzYr3vgDTt1Fw&lib=MR-C6dZ5Kz2htDo2AXf6_I-zilWmV86UI')
        .then(res => res.json())
        .then((result) => {
            CLEAR(COMMENTDIV)
            const user = result.find(user => user.Movie === localStorage.getItem('MovieId'));
            if (user) {
                result.forEach(element => {
                    if (element.Movie === localStorage.getItem('MovieId')) {
                        const COMMENTSHOLDER = document.createElement('div');
                        COMMENTSHOLDER.classList.add('CommentsHolder')
                        DISPLAY(COMMENTSHOLDER,`
                            <h1 class='CommentName' >${element.Commentor}</h1>
                            <p class='Comment'>${element.Comment}</p>
                        `);
                        ADD(COMMENTDIV, COMMENTSHOLDER)
                    } 
                });
                // Scroll to the bottom when new data is added
                COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
            } else {
                DISPLAY(COMMENTDIV,`
                    <h1 class='MessageError'>No Comments For This Movie</h1>
                `);
            }
        }).catch((err) => {
            console.log(err)
        });

    }, 5000);

}

export { ANDROIDCOMMENTDIV }