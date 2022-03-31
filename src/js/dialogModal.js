const modalOpenBtn = document.querySelectorAll("#header-button, #hero-button");
const dialog = document.getElementById("modal");
const closeBtn = document.querySelector(".close-button");

modalOpenBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    dialog.showModal();
  });
});

export { modalOpenBtn };