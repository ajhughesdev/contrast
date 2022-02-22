const dialog = document.getElementById('modal');
const dialogContent = document.querySelector('.dialog-content');
const h1 = document.querySelector('.modal-h1');
const modalOpenBtn = document.querySelectorAll('#header-button, #hero-button');
const closeBtn = document.querySelector('.close-button')

modalOpenBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    dialog.showModal();
  })
})

closeBtn.addEventListener('close', function onClose() {});