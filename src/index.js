import pageTemplate from './modules/page-template.js';
import homeTemplate from './modules/home.js';
import menuTemplate from './modules/menu.js';
import contactTemplate from './modules/contact.js';
import './style.css';

const { createHeader, createFooter } = pageTemplate;
const { createHomePage }  = homeTemplate;
const { createMenu } = menuTemplate;
const { createContactPage } = contactTemplate;

function buildPage(template, button) {
    // Page creation
    const contentContainer = document.querySelector('#content');

    clearDOM(contentContainer);

    contentContainer.appendChild(createHeader("Catfish Biff's"))

    // Unique page content goes here
    contentContainer.appendChild(template);
    // Set button to active
    const newButton = document.querySelector(`.${button}-button`);
    newButton.classList.add('active');

    contentContainer.appendChild(createFooter());

    attachListeners()
}

function unselectButtons() {
    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');
    const contactButton = document.querySelector('.contact-button');

    homeButton.classList.remove('active');
    menuButton.classList.remove('active');
    contactButton.classList.remove('active');
}

function clearDOM(section) {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }
}

// Event listener for buttons
function attachListeners() {
    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', () => {
        unselectButtons();
        buildPage(createHomePage(), 'home')
    });

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
        unselectButtons();
        buildPage(createMenu(), 'menu')
    });

    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', () => {
        unselectButtons();
        buildPage(createContactPage(), 'contact')
    });
}

// Arguments (specific page building function, active button for page)
buildPage(createHomePage(), 'home');