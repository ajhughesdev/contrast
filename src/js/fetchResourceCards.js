function fetchResourceCards(x) {
  let ul = document.getElementById(`${x}-results`);
  let list = document.createDocumentFragment();

  let url = `../src/api/${x}/${x}.json`;

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

        icon.setAttribute("src", `../src/api/${x}/${resource.Icon}`);
        icon.setAttribute("alt", `logo`);
        link.setAttribute("href", `${resource.Link}`);

        li.appendChild(icon);
        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(link);
        list.appendChild(li);

        ul.appendChild(list);
        ul.classList.add("resource-grid-cell");
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  // document.getElementById(`${x}-results`).style.display = "grid";
}

function makeActive(x) {
  if (
    document.getElementById(`${x}`).classList.contains("active-bar") === false
  ) {
    document.getElementById(`${x}`).classList.toggle("active-bar");
    document.getElementById(`${x}-results`).style.display = "grid";
  } else {
    return;
  }
}

export { fetchResourceCards, makeActive };
