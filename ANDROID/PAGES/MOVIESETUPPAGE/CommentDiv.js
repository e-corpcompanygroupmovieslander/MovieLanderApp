import { MOVIESETUPPAGE } from "./MovieSetUpPage.js";

const ANDROIDCOMMENTDIV = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, element) => {

    CLEAR(DIV);

    DISPLAY(DIV,`
        <div class='CommentsDiv'></div>
        <div class='AndroidHeader'>
            <img class='BackIcon' src='${ICONS}back.png'/>
            <h1 class='MovieNameComment'>${element.MovieName}</h1>
        </div>
        <input class='RequestMovieInput' type='text' placeholder='My Comment'/>
        <button class='RequestSendButton'>Send</button>
    `);

    const BACKICON = document.querySelector('.BackIcon');

    BACKICON.addEventListener('click', () => {
        MOVIESETUPPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, element);
    });

    const COMMENTDIV = document.querySelector('.CommentsDiv');

    // Function to fetch comments
    const fetchComments = () => {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=nXMhppWJckaAyXaZy6D__S0lqeR0atqSxAq1kOkk2GEnJWWQ52CPfpL7F9U8Vd-wdwSw_qpzVpQfuKi-IxfflDFevpOXFM4Fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDR547rJpn-Psy8MhiNxA-XQ-PS5P5L6nk8-Qayof4LLnMQUyXJJ2RPUI3gNjWu4MkYFRvveLc41ggslj1gFlVzYr3vgDTt1Fw&lib=MR-C6dZ5LzvI7gaw60UBuTgYmjHStKT-F')
        .then(res => res.json())
        .then((result) => {
            CLEAR(COMMENTDIV);
            const user = result.find(user => user.Movie === localStorage.getItem('MovieId'));
            if (user) {
                result.forEach(element => {
                    if (element.Movie === localStorage.getItem('MovieId')) {
                        const COMMENTSHOLDER = document.createElement('div');
                        COMMENTSHOLDER.classList.add('CommentsHolder');
                        DISPLAY(COMMENTSHOLDER,`
                            <h1 class='CommentName' >${element.Commentor}</h1>
                            <p class='Comment'>${element.Comment}</p>
                        `);
                        ADD(COMMENTDIV, COMMENTSHOLDER);
                    } 
                });
                // Scroll to the bottom when new data is added
                COMMENTDIV.scrollTop = COMMENTDIV.scrollHeight;
            } else {
                DISPLAY(COMMENTDIV,`
                    <h1 class='MessageError'>No Comments For This Movie</h1>
                `);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    // Initial fetch
    fetchComments();

    // Polling interval (in milliseconds)
    const pollingInterval = 5000; // 5 seconds

    // Poll for new comments periodically
    const pollForComments = setInterval(fetchComments, pollingInterval);

    // Cleanup interval when leaving the page
    window.addEventListener('beforeunload', () => {
        clearInterval(pollForComments);
    });

    const COMMENTBUTTON = document.querySelector('.RequestSendButton');
    const COMMENT = document.querySelector('.RequestMovieInput');

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
                fetchComments();
                COMMENT.value = '';
                DISPLAY(COMMENTBUTTON,`
                    Send
                `);
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            alert('Please Provide a comment');
        }
    });
};

export { ANDROIDCOMMENTDIV };
