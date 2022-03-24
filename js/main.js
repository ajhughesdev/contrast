import { fetchFonts, refetchFonts } from "./fonts.js";
import { fetchMockups, refetchMockups } from "./mockups.js";
import { fetchIllustrations, refetchIllustrations } from "./illustrations.js";
import { fetchIcons, refetchIcons } from "./icons.js";

const browse = document.querySelector(".browse"),
  hero = document.getElementById("hero"),
  newsletter = document.getElementById("newsletter"),
  browseBody = document.getElementById("container"),
  browseHeader = document.getElementById("top-site"),
  footer = document.querySelector("footer"),
  fontsId = document.getElementById("fonts"),
  mockups = document.getElementById("mockups"),
  illustrations = document.getElementById("illustrations"),
  icons = document.getElementById("icons"),
  iconResults = document.getElementById("icon-results"),
  mockupResults = document.getElementById("mockup-results"),
  illustrationResults = document.getElementById("illustration-results");

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
fontsId.addEventListener("click", () => {
  refetchFonts("fonts", "font-results");
});

// switch to "Illustrations" resources
illustrations.addEventListener("click", () => {
  refetchIllustrations();
});

// switch to "Icons" resources
icons.addEventListener("click", () => {
  refetchIcons();
});
