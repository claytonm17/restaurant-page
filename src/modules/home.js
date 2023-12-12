import location from '../images/location.jpeg'

function createHomePage() {
    // Parent element
    const homePage = document.createElement('main');
    homePage.setAttribute('class', 'body');

    // h2
    const secondTitle = document.createElement('h2');
    secondTitle.textContent = 'A staple at The Ohio State University';
    homePage.appendChild(secondTitle);

    // p tag 1
    const subText = document.createElement('p');
    subText.textContent = 'Serving up delicious homemade pizza and subs!';
    homePage.appendChild(subText);

    // image
    const locationImage = document.createElement('img');
    locationImage.src = location;
    locationImage.setAttribute('class', 'location-photo');
    locationImage.setAttribute('alt', "A photo of the location of Catfish Biff's along the south campus border of The Ohio State University");
    homePage.appendChild(locationImage);

    // p tag 2
    const pickupText = document.createElement('p');
    pickupText.textContent = 'Pickup and delivery available!';
    homePage.appendChild(pickupText);

    return homePage;
}

export default {
    createHomePage,
}