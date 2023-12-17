import { ADVERTSLINK, ADVERTSPATH } from "../../APIS/Api.js";

const ADVERTSPAGE = (ADVANCE, ADD) => {
    const ADVERTSPAGEDIV = document.querySelector('.AdvertsDiv');

    ADVANCE.GETPACKAGE(ADVERTSLINK, 'cors')
        .then((result) => {
            result.forEach(element => {
                if (localStorage.getItem('Device') === 'Web') {
                    const ADVERSTIMAGES = document.createElement('img');
                    ADVERSTIMAGES.src = ADVERTSPATH + element.ADVERTIMAGE;
                    ADVERSTIMAGES.classList.add('AdvertsImages');
    
                    ADD(ADVERTSPAGEDIV, ADVERSTIMAGES);
    
                    ADVERSTIMAGES.addEventListener('click', () => {
                        open(element.ADVERTLINK);
                    });
                } else {
                    // Show AdMob Ads here
                    // Load Native Advanced Ad
                    admob.requestNativeAd({
                        adUnitId: 'ca-app-pub-8932437482136784/8530979134',
                        autoShowNative: false
                    });

                    // Listen for the ad loaded event
                    document.addEventListener('admob.nativead.events.LOAD', function () {
                        // Get the Native Advanced ad content
                        const adContent = admob.getNativeAdContent();

                        // Create a container for the ad
                        const adContainer = document.createElement('div');
                        adContainer.classList.add('AdvertsImages');
                        adContainer.innerHTML = adContent;

                        // Append the ad container to the page
                        ADVERTSPAGEDIV.appendChild(adContainer);

                        // Now you can show the adContainer or handle it as needed
                        // For example, you might want to show it after a specific user action
                    });
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export { ADVERTSPAGE };
