const modal = document.querySelector('.modal');
const trigger = document.querySelectorAll('.trigger');
const closeBtn = document.querySelector('.close-button')

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.forEach((btn) => {
  btn.addEventListener('click', toggleModal);
})

closeBtn.addEventListener('click', toggleModal);
window.top.addEventListener('click', windowOnClick);