const mockupResults = document.getElementById("mockup-results");
const mockups = document.getElementById("mockups");

function fetchMockups() {
  let ul = document.getElementById("mockup-results");
  let list = document.createDocumentFragment();

  let url = "../api/mockups/mockups.json";

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

        icon.setAttribute("src", "../api/mockups/" + `${resource.Icon}`);
        icon.setAttribute("alt", "logo");
        link.setAttribute("href", `${resource.Link}`);

        li.appendChild(icon);
        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(link);
        list.appendChild(li);

        ul.appendChild(list);
        ul.classList.add("resource-grid-cell");
        ul.setAttribute("id", "mockup-results");
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function refetchMockups() {
  if (mockups.classList.contains("active") === false) {
    mockups.classList.toggle("active");
    mockupResults.style.display = "grid";
  } else {
    return;
  }
  document.getElementById("fonts").classList.remove("active");
  document.getElementById("illustrations").classList.remove("active");
  document.getElementById("icons").classList.remove("active");

  document.getElementById("font-results").style.display = "none";
  document.getElementById("illustration-results").style.display = "none";
  document.getElementById("icon-results").style.display = "none";
}

export { fetchMockups, refetchMockups };
