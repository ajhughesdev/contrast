
  document.getElementById('button1').addEventListener('click', loadFonts);

  function loadFonts() {
    document.getElementById('users').style.display = "none";
    document.getElementById('user').style.display = "grid";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'resources/fonts/fonts.json', true);

    xhr.onload = function () {
      if (this.status = 200) {
        var font = JSON.parse(this.responseText);

        var output = '';
        for (var i in font) {
          output += `<div class="fonts">
                    <img src="resources/fonts/${font[i].Icon}" alt="${font[i].Title} link" />
                    <h3>${font[i].Title}</h3>
                    <p>${font[i].Description}</p>
                    <a href="${font[i].Link}">Visit Resource →</a>
                    </div>
          `;

        }

        document.getElementById('user').innerHTML = output;
      }
    }
    xhr.send();

    document.getElementById('button2').addEventListener('click', loadMockups);

    function loadMockups() {
      document.getElementById('users').style.display = "grid";
      document.getElementById('user').style.display = "none";

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

          document.getElementById('users').innerHTML = output2;
        }
      }
      xhr2.send();
    }


  }