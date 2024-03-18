//CREATE A SPINING LOADER
const LOADER=(ELEMENT,TIME)=>{

    const loader=document.createElement('div');

    //STYLES
    STYLED(loader,'width','20%');
    STYLED(loader,'height','10%');
    STYLED(loader,'left','40%');
    STYLED(loader,'position','absolute');
    STYLED(loader,'display','inline-flex');
    STYLED(loader,'bottom','0');
    STYLED(loader,'marginBottom','5%');
    STYLED(loader,'background','#00000080');
    STYLED(loader,'borderRadius','10px');

    //CREATE AN IMAGE

    const IMAGE=document.createElement('img');

    IMAGE.src=WHITELOADINGICON;

    //STYLE
    STYLED(IMAGE,'width','50%');
    STYLED(IMAGE,'height','auto');
    STYLED(IMAGE,'position','relative');
    STYLED(IMAGE,'display','block');
    STYLED(IMAGE,'bottom','0');
    STYLED(IMAGE,'marginBottom','auto');
    STYLED(IMAGE,'marginTop','auto');
    STYLED(IMAGE,'marginLeft','auto');
    STYLED(IMAGE,'marginRight','auto');
    STYLED(IMAGE,'borderRadius','10px');

    var rotationAngle = 0;

    // Define a function to rotate the image
    function rotateImage() {
        rotationAngle += 2; // Increment rotation angle
        IMAGE.style.transform = 'rotate(' + rotationAngle + 'deg)'; // Apply rotation to the image
    }

    // Set interval to rotate the image every 10 milliseconds (adjust as needed for desired speed)
    var rotationInterval = setInterval(rotateImage, 1);

    loader.append(IMAGE);

    //Set a Timer
    CONDITION(TIME,
        ()=>setTimeout(() => {STYLED(loader,'display','none')}, TIME),
        ()=>setTimeout(() => {STYLED(loader,'display','none')}, 2000)
    )

    //Append
    CONDITION(ELEMENT,
        ()=>ADD(ELEMENT,loader),
        ()=>ADD('',loader)
    )

}

export{LOADER}