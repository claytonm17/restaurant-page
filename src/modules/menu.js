function createMenu() {
    // Parent element
    const menuPage = document.createElement('main');
    menuPage.setAttribute('class', 'body');

    // h2
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "We ain't got no fish!";
    menuPage.appendChild(menuTitle);

    // menu grid
    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('class', 'menu-grid');

    function createMenuItem(name, price, img) {
        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-item');
    
        const itemName = document.createElement('p');
        itemName.textContent = name;
        menuItem.appendChild(itemName);
        
        const itemPrice = document.createElement('p');
        itemPrice.setAttribute('class', 'price');
        itemPrice.textContent = price;
        menuItem.appendChild(itemPrice);
    
        const image = document.createElement('img');
        image.setAttribute('class', 'item-photo');
        image.setAttribute('alt', 'A delicious looking photo of the menu item listed');
        image.setAttribute('src', `./images/${img}.jpg`);
        menuItem.appendChild(image);
    
        return menuItem
    }

    menuGrid.appendChild(createMenuItem('Small 10" 2-Item Pizza', '$7.50', 'pizza-photo'));
    menuGrid.appendChild(createMenuItem('Italian Hot Sub', '$6.50', 'sub-photo'));
    menuGrid.appendChild(createMenuItem('Medium 12" 2-Item Pizza', '$8.50', 'pizza-photo'));
    menuGrid.appendChild(createMenuItem('Ham & Cheese Sub', '$6.50', 'sub-photo'));
    menuGrid.appendChild(createMenuItem('Large 14" 2-Item Pizza', '$9.50', 'pizza-photo'));
    menuGrid.appendChild(createMenuItem('Pizza Sub', '$7.50', 'sub-photo'));

    menuPage.appendChild(menuGrid);

    return menuPage
}



export default {
    createMenu,
}