function view_carousel_page(pageID,btnToActivID, btnToDeActivID){
    let carouselPageElement = document.getElementById(pageID);
    carouselPageElement.scrollIntoView({
        behavior: 'smooth', // Oly works if smooth scrolling is enabled in the browser
        block: 'nearest',   // Prevent vertical scrolling if the element is already in view
        inline: 'start'     // Ensure horizontal alignment at the start
    });

    //let carouselButtonsElement = document.getElementById("carouselButtonsID");
    //carouselButtonsElement.scrollIntoView({block: 'center'});    // Makes sure the navigation buttons don't get scrolled away

    activate_button(btnToActivID, btnToDeActivID);
}

function activate_button(btnToActivID, btnToDeActivID){
    document.getElementById(btnToActivID).className = 'activeButton';
    document.getElementById(btnToDeActivID).className = 'inactiveButton';
}