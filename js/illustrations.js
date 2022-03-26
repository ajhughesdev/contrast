function fetchIllustrations() {
  let ul = document.getElementById("illustration-results");
  let list = document.createDocumentFragment();

  let url = "../api/illustrations/illustrations.json";

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

        icon.setAttribute("src", "../api/illustrations/" + `${resource.Icon}`);
        icon.setAttribute("alt", "logo");
        link.setAttribute("href", `${resource.Link}`);

        li.appendChild(icon);
        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(link);
        list.appendChild(li);

        ul.appendChild(list);
        ul.classList.add("resource-grid-cell");
        ul.setAttribute("id", "illustration-results");
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function refetchIllustrations() {
  if (illustrations.classList.contains("active") === false) {
    illustrations.classList.toggle("active");
    illustrationResults.style.display = "grid";
  } else {
    return;
  }
  document.getElementById("mockups").classList.remove("active");
  document.getElementById("fonts").classList.remove("active");
  document.getElementById("icons").classList.remove("active");

  document.getElementById("mockup-results").style.display = "none";
  document.getElementById("font-results").style.display = "none";
  document.getElementById("icon-results").style.display = "none";
}
