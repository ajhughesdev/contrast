function fetchResourceCards(x) {
  let ul = document.getElementById(`${x}-results`);
  let list = document.createDocumentFragment();

  let url = `/api/${x}/${x}.json`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let resources = data;

      resources.map(function (resource) {
        let li = document.createElement("li");
        let icon = document.createElement("img");
        let title = document.createElement("h2");
        let desc = document.createElement("p");
        let link = document.createElement("a");

        title.innerHTML = `${resource.Title}`;
        desc.innerHTML = `${resource.Description}`;
        link.innerHTML = `Visit Resource`;

        icon.setAttribute("src", `../api/${x}/${resource.Icon}`);
        icon.setAttribute("alt", `logo`);
        link.setAttribute("href", `${resource.Link}`);

        li.appendChild(icon);
        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(link);
        list.appendChild(li);

        ul.appendChild(list);
        ul.classList.add("resource-grid-cell");
        ul.setAttribute("id", `${x}`);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
function makeActive(y) {
  if (document.getElementById(`${y}`).classList.contains("active") === false) {
    document.getElementById(`${y}`).classList.toggle("active");
    document.getElementById(`${y}Results`).style.display = "grid";
  } else {
    return;
  }
}
export { fetchResourceCards, makeActive };
