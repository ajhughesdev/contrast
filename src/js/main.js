import { accordionMenu } from './accordionMenu.js';
import { mobileNavToggle } from './mobileNavToggle.js';

accordionMenu();

document
  .querySelector('.hamburger-menu')
  .addEventListener('click', mobileNavToggle);
