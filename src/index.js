import createInitialPage from "./initialPage";
import createMenuPage from "./menuPage";
import createContactPage from "./contactPage";

const navBar = document.getElementById("navbar");

const homeBtn = document.createElement("div");
homeBtn.className = "nav-btn";
homeBtn.textContent = "Home";

const menuBtn = document.createElement("div");
menuBtn.className = "nav-btn";
menuBtn.textContent = "Menu";

const contactBtn = document.createElement("div");
contactBtn.className = "nav-btn";
contactBtn.textContent = "Contact";

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

homeBtn.addEventListener("click", createInitialPage);
menuBtn.addEventListener("click", createMenuPage);
contactBtn.addEventListener("click", createContactPage);

createInitialPage();
