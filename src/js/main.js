import { fetchResourceCards, makeActive } from "./fetchResourceCards.js";
import { accordionMenu } from "./accordionMenu.js";
import "./dialogModal.js";
import { retrieveData } from "./dialogModal.js";
import { mobileNavToggle } from "./mobileNavToggle.js";

const browse = document.querySelector(".browse");
const hero = document.getElementById("hero");
const newsletter = document.getElementById("newsletter");
const browseBody = document.getElementById("container");
const browseHeader = document.getElementById("top-site");
const footer = document.querySelector("footer");
const fonts = document.getElementById("fonts");
const mockups = document.getElementById("mockups");
const illustrations = document.getElementById("illustrations");
const icons = document.getElementById("icons");
const fontsResults = document.getElementById("fonts-results");
const iconsResults = document.getElementById("icons-results");
const mockupsResults = document.getElementById("mockups-results");
const illustrationsResults = document.getElementById("illustrations-results");

// page load
window.addEventListener("load", () => {
  fetchResourceCards("fonts");
});
window.addEventListener("load", () => {
  fetchResourceCards("mockups");
});
window.addEventListener("load", () => {
  fetchResourceCards("illustrations");
});
window.addEventListener("load", () => {
  fetchResourceCards("icons");
});

mockupsResults.style.display = "none";
iconsResults.style.display = "none";
illustrationsResults.style.display = "none";

accordionMenu();

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", mobileNavToggle);

document.querySelector(".cancel-btn").addEventListener("click", () => {
  document.querySelector("dialog").close();
});

window.addEventListener("load", () => {
  if (localStorage.getItem("Resource")) {
    retrieveData();
  } else {
    return;
  }
});

// switch to "Mockups" resources
mockups.addEventListener("click", () => {
  makeActive("mockups");

  fonts.classList.remove("active-bar");
  illustrations.classList.remove("active-bar");
  icons.classList.remove("active-bar");

  fontsResults.style.display = "none";
  illustrationsResults.style.display = "none";
  iconsResults.style.display = "none";
});

// switch to "Fonts" resources
fonts.addEventListener("click", () => {
  makeActive("fonts");

  mockups.classList.remove("active-bar");
  illustrations.classList.remove("active-bar");
  icons.classList.remove("active-bar");

  mockupsResults.style.display = "none";
  illustrationsResults.style.display = "none";
  iconsResults.style.display = "none";
});

// switch to "Illustrations" resources
illustrations.addEventListener("click", () => {
  makeActive("illustrations");

  mockups.classList.remove("active-bar");
  fonts.classList.remove("active-bar");
  icons.classList.remove("active-bar");

  mockupsResults.style.display = "none";
  fontsResults.style.display = "none";
  iconsResults.style.display = "none";
});

// switch to "Icons" resources
icons.addEventListener("click", () => {
  makeActive("icons");

  mockups.classList.remove("active-bar");
  illustrations.classList.remove("active-bar");
  fonts.classList.remove("active-bar");

  mockupsResults.style.display = "none";
  illustrationsResults.style.display = "none";
  fontsResults.style.display = "none";
});

let mediaQueryList = window.matchMedia("(min-width: 768px)");
if (mediaQueryList.matches) {
  document.querySelector('[id="desc"]').setAttribute("rows", 3);
} else {
  document.querySelector('[id="desc"]').setAttribute("rows", 5);
}

// "Browse" anchor tag
browse.addEventListener("click", () => {
  hero.style.display = "none";
  newsletter.style.display = "none";
  footer.style.paddingTop = "5rem";
  browseBody.style.background = "transparent";
  browseHeader.style.marginBottom = "-29px";
});


