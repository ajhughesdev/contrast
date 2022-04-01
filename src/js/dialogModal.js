const modalOpenBtn = document.querySelectorAll("#header-button, #hero-button");
const dialog = document.getElementById("modal");
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
  let Link = document.getElementById("link").value;
  // let key = document.getElementById("resources-cat").value;

  const Resource = {
    key: key,
    Icon: Icon,
    Title: Title,
    Description: Description,
    Link: Link,
  };

  window.localStorage.setItem("Resource", JSON.stringify(Resource));
});

function retrieveData() {
  const localStorageKey = localStorage.getItem("Resource");
  let parsedData = JSON.parse(localStorageKey);

  let ul = document.getElementById("local-storage");
  let list = document.createDocumentFragment();

  let li = document.createElement("li");
  let icon = document.createElement("img");
  let title = document.createElement("h2");
  let desc = document.createElement("p");
  let link = document.createElement("a");

  title.innerHTML = `${parsedData.Title}`;
  desc.innerHTML = `${parsedData.Description}`;
  link.innerHTML = `Visit Resource`;

  icon.setAttribute("src", `${parsedData.Icon}`);
  icon.setAttribute("alt", `logo`);
  link.setAttribute("href", `${parsedData.Link}`);

  li.appendChild(icon);
  li.appendChild(title);
  li.appendChild(desc);
  li.appendChild(link);
  list.appendChild(li);

  ul.appendChild(list);
  ul.classList.add("resource-grid-cell");
}

export { modalOpenBtn, retrieveData };
