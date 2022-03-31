function accordionMenu() {
  /**
   * Element.closest() polyfill
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
   */
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
      let el = this;
      let ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s)) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return null;
    };
  }

  // Accordion menu
  document.addEventListener("click", function (e) {
    let trigger = e.target.closest("[data-accordion-menu]");
    if (!trigger) return;

    let target = document.querySelector(trigger.hash);
    if (!target) return;

    e.preventDefault();

    target.classList.toggle("accordion-hidden");

    trigger.classList.toggle("accordion-active");
  });

  document.addEventListener("click", function (e) {
    let trigger = e.target.closest("[data-accordion-menu-nav]");
    if (!trigger) return;

    let target = document.querySelector(trigger.hash);
    if (!target) return;

    e.preventDefault();

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      return;
    }

    let accordions = document.querySelectorAll("[data-accordion-wrapper]");
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove("active");
    }

    target.classList.toggle("active");
  });
}

document.querySelectorAll(".accordion-link").forEach((item) => {
  item.addEventListener("click", toggleActive());
});

function toggleActive() {
  document
    .querySelector(".accordion-link")
    .classList.toggle("accordion-active");
}

export { accordionMenu };
