import { MOVIESETUPPAGE } from "../MOVIESETUPPAGE/MovieSetUpPage.js";

const ANDROIDREVIEWMOVIES = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, element) => {
  CLEAR(DIV);

  DISPLAY(DIV, `
    <div class='AndroidHeader'>
      <img class='BackIcon' src='${ICONS}back.png'/>
      <h1 class='Payments'>${element.MovieName}</h1>
    </div>
    <br><br><br>
    <textarea class='Myreview'></textarea>
  `);

  const BACKICON = document.querySelector('.BackIcon');
  const TEXTAREA = document.querySelector('.Myreview');

  BACKICON.addEventListener('click', () => {
    MOVIESETUPPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, element);
  });

  // Load existing reviews from local storage
  const savedReviews = JSON.parse(localStorage.getItem('movieReviews')) || [];

  // Find the review for the current movie
  const currentReview = savedReviews.find(review => review.movieName === element.MovieName);

  // Set the textarea value to the existing review or an empty string
  TEXTAREA.value = currentReview ? currentReview.review : '';

  // Save user input in local storage when the textarea content changes
  TEXTAREA.addEventListener('input', () => {
    const userReview = TEXTAREA.value;

    // Update or add the review for the current movie in the array
    const updatedReviews = savedReviews.map(review =>
      review.movieName === element.MovieName ? { movieName: element.MovieName, review: userReview } : review
    );

    if (!currentReview) {
      // If there was no existing review, add a new entry to the array
      updatedReviews.push({ movieName: element.MovieName, review: userReview });
    }

    // Save the updated array back to local storage
    localStorage.setItem('movieReviews', JSON.stringify(updatedReviews));
  });
};

export { ANDROIDREVIEWMOVIES };
