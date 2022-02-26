const dialog = document.getElementById("modal");
const modalOpenBtn = document.querySelectorAll("#header-button, #hero-button");
const closeBtn = document.querySelector(".close-button");

modalOpenBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("open");
  });
});
