import { CATERGORIESPATH, CATERGORYAPI } from "../../../APIS/Api.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDSEEMOREPAGE } from "../SEEMOREPAGE/SeeMorePage.js";

const ANDROIDCATERGORIES = (DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE) => {
  CLEAR(DIV);

  DISPLAY(DIV, `
    <div class='AndroidHeader'>
      <img class='BackIcon' src='${ICONS}back.png'/>
      <input type="text" id='SearchCatergory' placeholder="Search For Catergory">
      <img class='LightModeIcon' src='${ICONS}list.png'/>
    </div>
    <div class='CatergoriesStore'></div>
  `);

  const SEARCHCOUNTRY = document.querySelector('#SearchCatergory');
  const BACKICON = document.querySelector('.BackIcon');
  const CATERGORIESSTORE = document.querySelector('.CatergoriesStore');

  DISPLAY(CATERGORIESSTORE, `<img id='CatergoriesLoading' class='LoadingIcon' src='${ICONS}loading.png'/>`);

  BACKICON.addEventListener('click', () => {
    ANDROIDHOMEPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE);
  });

  ADVANCE.GETPACKAGE(CATERGORYAPI, 'cors')
    .then((result) => {
      CLEAR(CATERGORIESSTORE);

      result.forEach(element => {
        const parentalControlEnabled = localStorage.getItem('ParentalControlPin');

        if (parentalControlEnabled && element.ParentalControl) {
          // Skip movies with parental control if parental control is enabled
          return;
        }

        const CATERGORIESHOLDER = document.createElement('div');
        CATERGORIESHOLDER.classList.add('CATERGORIESHOLDER');

        const CATERGORIESIMAGES = document.createElement('img');
        CATERGORIESIMAGES.classList.add('CATERGORIESIMAGES');
        CATERGORIESIMAGES.src = CATERGORIESPATH + element.Image;

        const CATERGORIESNAME = document.createElement('h1');
        CATERGORIESNAME.classList.add('CATERGORIESNAME');
        DISPLAY(CATERGORIESNAME, element.Sections);

        ADD(CATERGORIESHOLDER, CATERGORIESIMAGES);
        ADD(CATERGORIESHOLDER, CATERGORIESNAME);
        ADD(CATERGORIESSTORE, CATERGORIESHOLDER);

        // Event listener for searching countries
        SEARCHCOUNTRY.addEventListener('input', () => {
          const searchValue = SEARCHCOUNTRY.value.trim().toLowerCase();
          const categoryName = CATERGORIESNAME.innerHTML.toLowerCase();
          if (categoryName.includes(searchValue)) {
            CATERGORIESHOLDER.style.display = 'inline-table';
          } else {
            CATERGORIESHOLDER.style.display = 'none';
          }
        });

        const URL = element.link;

        CATERGORIESHOLDER.addEventListener('click', () => {
          ADVANCE.ADDSTORAGE('local', 'MOVIEURL', URL);
          ADVANCE.ADDSTORAGE('local', 'MovieNavigation', 'SeeMore');
          ADVANCE.ADDSTORAGE('local', 'SeeMoreNavigatore', 'Catergory');
          ANDROIDSEEMOREPAGE(DIV, ADD, CLEAR, DISPLAY, ICONS, ADVANCE, URL);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { ANDROIDCATERGORIES };
