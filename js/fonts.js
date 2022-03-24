const fonts = document.getElementById("fonts");
const fontResults = document.getElementById("font-results");

function fetchFonts() {
  let ul = document.getElementById("font-results");
  let list = document.createDocumentFragment();

  let url = "../api/fonts/fonts.json";

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

        icon.setAttribute("src", "../api/fonts/" + `${resource.Icon}`);
        icon.setAttribute("alt", "logo");
        link.setAttribute("href", `${resource.Link}`);

        li.appendChild(icon);
        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(link);
        list.appendChild(li);

        ul.appendChild(list);
        ul.classList.add("resource-grid-cell");
        ul.setAttribute("id", "font-results");
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function refetchFonts() {
  if (fonts.classList.contains("active") === false) {
    fonts.classList.toggle("active");
    fontResults.style.display = "grid";
  } else {
    return;
  }
  document.getElementById("mockups").classList.remove("active");
  document.getElementById("illustrations").classList.remove("active");
  document.getElementById("icons").classList.remove("active");

  document.getElementById("mockup-results").style.display = "none";
  document.getElementById("illustration-results").style.display = "none";
  document.getElementById("icon-results").style.display = "none";
}

export { fetchFonts, refetchFonts };
