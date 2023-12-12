import pageTemplate from './modules/page-template.js';
import homeTemplate from './modules/home.js';
import menuTemplate from './modules/menu.js';
import contactTemplate from './modules/contact.js';

const { createHeader, createFooter } = pageTemplate;
const { createHomePage }  = homeTemplate;
const { createMenu } = menuTemplate;
const { createContactPage } = contactTemplate;

function buildPage(template, button) {
    // Page creation
    const contentContainer = document.querySelector('#content');
    contentContainer.appendChild(createHeader("Catfish Biff's"))

    // Unique page content goes here
    contentContainer.appendChild(template);
    // Set button to active
    const newButton = document.querySelector(`.${button}-button`);
    newButton.classList.add('active');

    contentContainer.appendChild(createFooter());
}

// Arguments (specific page building function, active button for page)
buildPage(createContactPage(), 'contact');