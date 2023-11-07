function ShowAdvancedSettings() {
    const get_state = document.querySelector("#advanced_settings_checkbox");
    const state = get_state.checked;
    var anon_option = document.createElement("select");
    var country_option = document.createElement("select");
    var ao_label = document.createElement("label");
    country_option.id = "country_option";
    anon_option.id = "anon_option";
    if (state == true) {
      var US = document.createElement("option");
      var UK = document.createElement("option");
      var High = document.createElement("option");
      var Medium = document.createElement("option");
      var Low = document.createElement("option");
      var None = document.createElement("option");
      High.innerHTML = "High";
      Medium.innerHTML = "Medium";
      Low.innerHTML = "Low";
      None.innerHTML = "None";
      US.innerHTML = "US";
      UK.innerHTML = "UK";
      country_option.appendChild(US);
      country_option.appendChild(UK);
      anon_option.appendChild(High);
      anon_option.appendChild(Medium);
      anon_option.appendChild(Low);
      anon_option.appendChild(None);
      document.body.appendChild(country_option);
      document.body.appendChild(anon_option);
    }
    if (state == false) {
      const get_ao_label = document.getElementById("ao_label");
      const get_country_option = document.getElementById("country_option");
      const get_anon_option = document.getElementById("anon_option");
      get_anon_option.remove();
      get_country_option.remove();
    }
  }
  function get_settings() {
    const get_state = document.querySelector("#advanced_settings_checkbox");
    const state = get_state.checked;
    if (state == true) {
      var anonymity_level = document.getElementById("anon_option").value;
      var country = document.getElementById("country_option").value;
      var url = document.getElementById("url_textbox").value;
      return [country, anonymity_level, url];
    }
    if (state == false) {
      console.log(
        "advanced settings disabled waiting to program default response"
      );
      var url = document.getElementById("url_textbox").value;
      return url;
    }
  }
  