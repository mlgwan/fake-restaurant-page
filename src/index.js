import createInitialPage from "./initialPage";

const navBar = document.getElementById("navbar");

const homeBtn = document.createElement("div");
homeBtn.className = "nav-btn";
homeBtn.textContent = "Home";

const menuBtn = document.createElement("div");
menuBtn.className = "nav-btn";
menuBtn.textContent = "Menu";

const aboutBtn = document.createElement("div");
aboutBtn.className = "nav-btn";
aboutBtn.textContent = "About";

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(aboutBtn);

homeBtn.addEventListener("click", createInitialPage);

