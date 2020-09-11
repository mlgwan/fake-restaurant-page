function createInitialPage (){
    let content = document.getElementById("content");

    content.innerHTML = "";

    let homePage = document.createElement("div");
    homePage.id = "home-page";

    let upperContent = document.createElement("div");
    upperContent.id = "upper-content";
    let heading = document.createElement("h1");
    heading.innerText = "Nice Breakfast Place";
    upperContent.appendChild(heading);

    let lowerContent = document.createElement("div");
    lowerContent.id = "lower-content";
    let descriptionText = document.createElement("span");
    descriptionText.innerText = "Expand your culinary horizons in a welcoming and relaxing environment. Our Michelin-starred chef Dante Jacuzzi will serve you some of the most innovative dishes your eyes have ever gazed upon and will ensure to leave them as satisfied as your appetite. Feast on a conglomerate of carefully selected meals from around the world.";
    lowerContent.appendChild(descriptionText);

    homePage.appendChild(upperContent);
    homePage.appendChild(lowerContent);

    content.appendChild(homePage);
}

export default createInitialPage;