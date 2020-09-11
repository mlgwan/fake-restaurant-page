function createMenuPage(){

    let menuData = [{
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "../src/assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        }
    ];

    const content = document.getElementById("content");
    const menu = document.createElement("ul");
    menu.id = "menu";

    menuData.forEach(menuDataItem =>{
        console.log(menuDataItem, 1);
        const menuEntry = document.createElement("li");
        menuEntry.className = "menu-entry";
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const menuItemImage = document.createElement("div");
        menuItemImage.className = "menu-item-image";
        menuItemImage.style.backgroundImage = `url(${menuDataItem.image})`;
        const menuItemName = document.createElement("div");
        menuItemName.className = "menu-item-name";
        menuItemName.innerText = menuDataItem.name;
        const menuItemDescription = document.createElement("div");
        menuItemDescription.className = "menu-item-description";
        menuItemDescription.innerText = menuDataItem.description;
        const menuItemPrice = document.createElement("div");
        menuItemPrice.className = "menu-item-price";
        menuItemPrice.innerText = menuDataItem.price + "€";

        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemDescription);
        menuItem.appendChild(menuItemPrice);

        menuEntry.appendChild(menuItem);

        menu.appendChild(menuEntry);
    });

    content.appendChild(menu);
}

export default createMenuPage;