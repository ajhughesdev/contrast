import { fetchFonts, refetchFonts } from "./fonts.js";
import { fetchMockups, refetchMockups } from "./mockups.js";
import { fetchIllustrations, refetchIllustrations } from "./illustrations.js";
import { fetchIcons, refetchIcons } from "./icons.js";

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

const iconResults = document.getElementById("icon-results");
const mockupResults = document.getElementById("mockup-results");
const illustrationResults = document.getElementById("illustration-results");

// page load
window.addEventListener("load", fetchFonts());
window.addEventListener("load", fetchMockups());
window.addEventListener("load", fetchIllustrations());
window.addEventListener("load", fetchIcons());

mockupResults.style.display = "none";
illustrationResults.style.display = "none";
iconResults.style.display = "none";

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
  refetchMockups();
});

// switch to "Fonts" resources
fonts.addEventListener("click", () => {
  refetchFonts();
});

// switch to "Illustrations" resources
illustrations.addEventListener("click", () => {
  refetchIllustrations();
});

// switch to "Icons" resources
icons.addEventListener("click", () => {
  refetchIcons();
});
