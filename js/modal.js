const dialog = document.getElementById("modal");
const dialogContent = document.querySelector(".dialog-content");
const modalOpenBtn = document.querySelectorAll("#header-button, #hero-button");
const closeBtn = document.querySelector(".close-button");
const form = dialog.getElementsByTagName("form[method='dialog']");

dialog.style.position = "fixed";
dialog.style.top = "0";
dialog.style.left = "0";
dialog.style.right = "0";
dialog.style.width = "100%";
dialog.style.height = "100%";
dialog.style.transition = "all 450ms ease";


modalOpenBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("open");

    dialogContent.style.position = "absolute";
    dialogContent.style.top = "50%";
    dialogContent.style.left = "50%";
    dialogContent.style.transform = "translate(-50%, -50%)";
    dialogContent.style.backgroundColor = "hsl(0 0% 100%)";
    dialogContent.style.padding = "2.25rem";
    dialogContent.style.width = "37.875rem";
    dialogContent.style.borderRadius = "5px";
  });
});
