import { accordionMenu } from './accordionMenu.js';
import { mobileNavToggle } from './mobileNavToggle.js';
import { modalOpenBtn } from './dialogModal.js';

accordionMenu();

document
  .querySelector('.hamburger-menu')
  .addEventListener('click', mobileNavToggle);
