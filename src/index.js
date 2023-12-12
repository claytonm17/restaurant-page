import pageTemplate from './modules/page-template.js';

const { createHeader, createFooter } = pageTemplate;

// Page creation
const contentContainer = document.querySelector('#content');
contentContainer.appendChild(createHeader("Catfish Biff's"))

// Unique page content goes here

contentContainer.appendChild(createFooter());