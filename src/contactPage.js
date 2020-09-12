function createContactPage(){
    let contactData = {
        phone: "234 356 2362",
        email: "contact@nicerestaurant.com",
        address: "123 Nice Street, Nice, France"
    }

    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactPage = document.createElement("div");
    contactPage.id = "contact-page";

    const contactWindow = document.createElement("div");
    contactWindow.id = "contact-window";

    const contactHeading = document.createElement("div");
    contactHeading.id = "contact-heading";
    contactHeading.textContent = "Contact Us";

    contactWindow.appendChild(contactHeading);
    
    for (let entry in contactData){
        const dataEntry = document.createElement("span");

        const contentHeading = document.createElement("span");
        contentHeading.className = "contact-entry-heading";
        contentHeading.textContent = `${firstLetterToUppercase(entry)}: `

        const contentText = document.createElement("span");
        contentText.className = "contact-entry-text";
        contentText.textContent = contactData[entry];

        dataEntry.appendChild(contentHeading);
        dataEntry.appendChild(contentText);

        contactWindow.appendChild(dataEntry);
    }

    contactPage.appendChild(contactWindow);

    content.appendChild(contactPage);
}

function firstLetterToUppercase(str){
    let result = str.slice(0, 1).toUpperCase() + str.slice(1);
    return result;
}

export default createContactPage;