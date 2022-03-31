const modalOpenBtn = document.querySelectorAll("#header-button, #hero-button");
const dialog = document.getElementById("modal");
// const closeBtn = document.querySelector(".cancel");
const submitForm = document.getElementById("submit-form");

modalOpenBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    dialog.showModal();
  });
});

submitForm.addEventListener("click", () => {
  let Icon = document.getElementById("icon-link").value;
  let Title = document.getElementById("name").value;
  let Description = document.getElementById("desc").value;
  let Link = document.getElementById("icon-link").value;
  let key = document.getElementById("resources-cat").value;

  const resource = {
    Icon: Icon,
    Title: Title,
    Description: Description,
    Link: Link,
  };

  window.localStorage.setItem(key, JSON.stringify(resource));
});

function retrieveData() {
  let li = document.createElement("li");
  let icon = document.createElement("img");
  let title = document.createElement("h2");
  let desc = document.createElement("p");
  let link = document.createElement("a");
}



export { modalOpenBtn };
