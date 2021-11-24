loadFonts();
document.getElementById('fonts').addEventListener('click', loadFonts);

function loadFonts() {
  document.getElementById('mockupArray').style.display = "none";
  document.getElementById('fontArray').style.display = "grid";
  document.getElementById('illustrationArray').style.display = "none";
  document.getElementById('iconArray').style.display = "none";

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'resources/fonts/fonts.json', true);

  xhr.onload = function () {
    if (this.status = 200) {
      var font = JSON.parse(this.responseText);

      var output = '';
      for (var i in font) {
        output += `<div class="fonts">
                    <img src="resources/fonts/${font[i].Icon}" alt="resource link" />
                    <h3>${font[i].Title}</h3>
                    <p>${font[i].Description}</p>
                    <a href="${font[i].Link}">Visit Resource →</a>
                    </div>
          `;

      }

      document.getElementById('fontArray').innerHTML = output;
    }
  }
  xhr.send();

  document.getElementById('mockups').addEventListener('click', loadMockups);

  function loadMockups() {
    document.getElementById('mockupArray').style.display = "grid";
    document.getElementById('fontArray').style.display = "none";
    document.getElementById('illustrationArray').style.display = "none";
    document.getElementById('iconArray').style.display = "none";

    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'resources/mockups/mockups.json', true);

    xhr2.onload = function () {
      if (this.status = 200) {
        var mockup = JSON.parse(this.responseText);

        var output2 = '';
        for (var i in mockup) {
          output2 += `<div class="mockups">
                    <img src="resources/mockups/${mockup[i].Icon}" alt="${mockup[i].Title} link" />
                    <h3>${mockup[i].Title}</h3>
                    <p>${mockup[i].Description}</p>
                    <a href="${mockup[i].Link}">Visit Resource →</a>
                    </div>
          `;

        }

        document.getElementById('mockupArray').innerHTML = output2;
      }
    }
    xhr2.send();
  }


}


document.getElementById('illustrations').addEventListener('click', loadIllustrations);

function loadIllustrations() {
  document.getElementById('mockupArray').style.display = "none";
  document.getElementById('fontArray').style.display = "none";
  document.getElementById('iconArray').style.display = "none";
  document.getElementById('illustrationArray').style.display = "grid";

  var xhr3 = new XMLHttpRequest();
  xhr3.open('GET', 'resources/illustrations/illustrations.json', true);

  xhr3.onload = function () {
    if (this.status = 200) {
      var illustration = JSON.parse(this.responseText);

      var output3 = '';
      for (var i in illustration) {
        output3 += `<div class="illustrations">
                  <img src="resources/illustrations/${illustration[i].Icon}" alt="${illustration[i].Title} link" />
                  <h3>${illustration[i].Title}</h3>
                  <p>${illustration[i].Description}</p>
                  <a href="${illustration[i].Link}">Visit Resource →</a>
                  </div>
        `;

      }

      document.getElementById('illustrationArray').innerHTML = output3;
    }
  }
  xhr3.send();
}


document.getElementById('icons').addEventListener('click', loadIcons);

function loadIcons() {
  document.getElementById('mockupArray').style.display = "none";
  document.getElementById('fontArray').style.display = "none";
  document.getElementById('illustrationArray').style.display = "none";
  document.getElementById('iconArray').style.display = "grid";

  var xhr4 = new XMLHttpRequest();
  xhr4.open('GET', 'resources/icons/icons.json', true);

  xhr4.onload = function () {
    if (this.status = 200) {
      var icon = JSON.parse(this.responseText);

      var output4 = '';
      for (var i in icon) {
        output4 += `<div class="icons">
                  <img src="resources/icons/${icon[i].Icon}" alt="${icon[i].Title} link" />
                  <h3>${icon[i].Title}</h3>
                  <p>${icon[i].Description}</p>
                  <a href="${icon[i].Link}">Visit Resource →</a>
                  </div>
        `;

      }

      document.getElementById('iconArray').innerHTML = output4;
    }
  }
  xhr4.send();
}
