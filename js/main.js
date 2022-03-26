import { fetchResourceCards, refetchResourceCards } from "./resourceCards.js";

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
  let x = "fonts";
  fetchResourceCards(x);
});
window.addEventListener("load", () => {
  let x = "mockups";
  fetchResourceCards(x);
});
window.addEventListener("load", () => {
  let x = "illustrations";
  fetchResourceCards(x);
});
window.addEventListener("load", () => {
  let x = "icons";
  fetchResourceCards(x);
});

mockupsResults.style.display = "none";
illustrationsResults.style.display = "none";
iconsResults.style.display = "none";

// "Browse" anchor tag
browse.addEventListener("click", () => {
  hero.style.display = "none";
  newsletter.style.display = "none";
  footer.style.paddingTop = "5rem";
  browseBody.style.background = "transparent";
  browseHeader.style.marginBottom = "-29px";
});

// switch to "Mockups" resources
mockups.addEventListener("click", () => {
  let x = "mockups";

  fetchResourceCards(x);

  fonts.classList.remove("active");
  illustrations.classList.remove("active");
  icons.classList.remove("active");

  fontsResults.style.display = "none";
  illustrationsResults.style.display = "none";
  iconsResults.style.display = "none";
});

// switch to "Fonts" resources
fonts.addEventListener("click", () => {
  let y = "fonts";
  refetchResourceCards(y);

  mockups.classList.remove("active");
  illustrations.classList.remove("active");
  icons.classList.remove("active");

  mockupsResults.style.display = "none";
  illustrationsResults.style.display = "none";
  iconsResults.style.display = "none";
});

// switch to "Illustrations" resources
illustrations.addEventListener("click", () => {
  let y = ["illustrations"];

  refetchResourceCards(y);

  mockups.classList.remove("active");
  fonts.classList.remove("active");
  icons.classList.remove("active");

  mockupsResults.style.display = "none";
  fontsResults.style.display = "none";
  iconsResults.style.display = "none";
});

// switch to "Icons" resources
icons.addEventListener("click", () => {
  let y = "icons";

  refetchResourceCards(y);


  mockups.classList.remove("active");
  illustrations.classList.remove("active");
  fonts.classList.remove("active");

  mockupsResults.style.display = "none";
  illustrationsResults.style.display = "none";
  fontsResults.style.display = "none";
});
