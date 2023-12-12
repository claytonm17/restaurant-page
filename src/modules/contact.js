import map from '../images/map.jpeg';

function createContactPage() {
    const contactPage = document.createElement('main');
    contactPage.setAttribute('class', 'body');

    const contactLabel = document.createElement('h2');
    contactLabel.textContent = 'Contact us';
    contactPage.appendChild(contactLabel);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '☎️ (123)-456-7890';
    contactPage.appendChild(phoneNumber);

    const emailAddress = document.createElement('p');
    emailAddress.textContent = '✉️ catfish@biffs.com';
    contactPage.appendChild(emailAddress);

    const mapImage = document.createElement('img');
    mapImage.setAttribute('src', map);
    mapImage.setAttribute('alt', "A map with the location of Catfish Biff's")
    mapImage.setAttribute('class', 'map');
    contactPage.appendChild(mapImage);

    const disclaimer = document.createElement('p');
    disclaimer.textContent = 'These contact methods are not real!';
    contactPage.appendChild(disclaimer);

    return contactPage;
}

export default {
    createContactPage,
}