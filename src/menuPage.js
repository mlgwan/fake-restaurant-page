function createMenuPage(){

    let menuData = [{
            image: "./assets/food/eggs.jpg",
            name: "Eggs",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "./assets/food/eggs.jpg",
            name: "Eggs2",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "./assets/food/eggs.jpg",
            name: "Eggs3",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "./assets/food/eggs.jpg",
            name: "Eggs4",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "./assets/food/eggs.jpg",
            name: "Eggs5",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "./assets/food/eggs.jpg",
            name: "Eggs6",
            description: "some delicious eggs",
            price: 12
        },
        {
            image: "./assets/food/eggs.jpg",
            name: "Eggs123",
            description: "some very delicious eggs",
            price: 123
        }
    ];

    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuPage = document.createElement("ul");
    menuPage.id = "menu-page";

    menuData.forEach(menuDataItem =>{
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

        menuPage.appendChild(menuEntry);
    });

    content.appendChild(menuPage);
}

export default createMenuPage;