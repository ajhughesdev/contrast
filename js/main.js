const browse = document.querySelector(".browse");
const hero = document.getElementById("hero");
const newsletter = document.getElementById("newsletter");
const browseBody = document.getElementById("container");
const browseHeader = document.getElementById("top-site");
const footer = document.querySelector('footer');

browse.addEventListener("click", () => {
  hero.style.display = "none";
  newsletter.style.display = "none";
  footer.style.paddingTop = "5rem";
  browseBody.style.background = "transparent";
  browseHeader.style.marginBottom = "-29px";
});
