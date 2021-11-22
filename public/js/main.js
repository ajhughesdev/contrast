const btnFonts = document.getElementById('btnFonts');
btnFonts.addEventListener('click', toggleFonts);

function toggleFonts() {
  if (fonts.style.display === "none") {
    fonts.style.display = "grid";
  } else {
    fonts.style.display = "none"
  }
}

fetchFontData();

function fetchFontData() {
  fetch("../public/resources/fonts/fonts.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map(font => {
          return `
          <div class="fonts">
          <img src="../public/resources/fonts/${font.Icon}" alt="${font.Title} link" />
          <h3>${font.Title}</h3>
          <p>${font.Description}</p>
          <a href="${font.Link}" target="_blank" rel="no referrer noopener">Visit Resource →</a>
          </div>`
        })
        .join("");
      document
        .querySelector('#fonts')
        .insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => {
      console.log(error);
    });
};

const btnMockups = document.getElementById('btnMockups');
btnMockups.addEventListener('click', toggleMockups);

function toggleMockups() {
  if (mockups.style.display === "grid") {
    mockups.style.display = "none";
  } else {
    mockups.style.display = "grid"
  }
}

function fetchMockupData() {
  fetch("../public/resources/mockups/mockups.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map(mockup => {
          return `
          <div class="mockups">
          <img src="../public/resources/mockups/${mockup.Icon}" alt="${mockup.Title} link" />
          <h3>${mockup.Title}</h3>
          <p>${mockup.Description}</p>
          <a href="${mockup.Link}" target="_blank" rel="no referrer noopener">Visit Resource →</a>
          </div>`
        })
        .join("");
      document
        .querySelector('#mockup')
        .insertAdjacentHTML('afterbegin', html);
    })
  // .catch(error => {
  //   console.log(error);
  // });
};