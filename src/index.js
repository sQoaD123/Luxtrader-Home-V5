import "./index.html";
import "./index.scss";
import "./js/swipers";

let user_icon = document.querySelector(".user-header__icon");
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector(".user-header__menu");
  user_menu.classList.toggle("_active");
  let menu = document.querySelector(".menu__body");
  menu.classList.remove("_active");
  iconMenu.classList.remove("_active");
});
document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest(".user-header")) {
    let user_menu = document.querySelector(".user-header__menu");
    user_menu.classList.remove("_active");
  }
});

let iconMenu = document.querySelector(".icon-menu");
iconMenu.addEventListener("click", function (e) {
  let menu = document.querySelector(".menu__body");
  menu.classList.toggle("_active");
  iconMenu.classList.toggle("_active");
});

function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();
