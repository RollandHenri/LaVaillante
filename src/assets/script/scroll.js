const hambmenu = document.querySelector(".nav-hamb-logo");
// const hambmenuClose = document.querySelector(".nav-hamb-logo-close");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 901) {
    hambmenu.style.background =
      "url(/public/icon/burger-bar.png) center / cover";
  } else {
    hambmenu.style.background =
      "url(/public/icon/burger-bar-white.png) center / cover";
  }
});
