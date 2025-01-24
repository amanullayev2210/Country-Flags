const light_mode = document.querySelector(".light_mode");
const dark_mode = document.querySelector(".dark_mode");

let data = true;

function OnAdd() {
    document
      .querySelector(".site_lightmode_button")
      .closest(".body")
      .classList.toggle("js-darkmode");
      if (data) {
          light_mode.style.display = "none";
          dark_mode.style.display = "block";
          data = false;
        } else {
          dark_mode.style.display = "none";
          light_mode.style.display = "block";
          data = true;
        }
    };