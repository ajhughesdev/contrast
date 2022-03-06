document
  .getElementById("mockups")
  .addEventListener("click", function fetchMockups() {
    const ul = document.getElementById("resource-grid");
    const list = document.createDocumentFragment();
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
          link.innerHTML = `Visit Resource →`;

          icon.setAttribute("src", "../api/mockups/" + `${resource.Icon}`);
          icon.setAttribute("alt", "logo");
          link.setAttribute("href", `${resource.Link}`);

          li.appendChild(icon);
          li.appendChild(title);
          li.appendChild(desc);
          li.appendChild(link);
          list.appendChild(li);

          ul.appendChild(list);

          ul.setAttribute("class", "resource-grid-cell");
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
