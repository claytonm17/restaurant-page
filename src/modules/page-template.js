// Creates the top bar of webpage
function createHeader(text) {
    const header = document.createElement('header');
    header.setAttribute('class', 'heading');
    
    // Restaurant Title
    const title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title);

    // Nav bar creation
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar');

    function createButton(selector, button) {
        const newButton = document.createElement('button');
        newButton.setAttribute('class', selector);
        newButton.textContent = button;
        return newButton;
    }
    
    nav.appendChild(createButton('home-button', 'Home'));
    nav.appendChild(createButton('menu-button', 'Menu'));
    nav.appendChild(createButton('contact-button', 'Contact'));


    header.appendChild(nav);
    return header;
}

// Footer build
function createFooter() {
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Created by Claytonm17 on GitHub';
    footer.appendChild(footerText);
    return footer;
}

export default {
    createHeader,
    createFooter
};