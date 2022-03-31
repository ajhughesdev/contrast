import { accordionMenu } from "./accordionMenu.js";
import { mobileNavToggle } from "./mobileNavToggle.js";
import { modalOpenBtn } from "./dialogModal.js";
import { selectionBarToggle } from "./selectionBarToggle.js";

accordionMenu();

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", mobileNavToggle);