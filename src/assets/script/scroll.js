const hambmenu = document.querySelector(".nav-hamb-logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 880) {
    hambmenu.style.background =
      "url(/public/icon/burger-bar.png) center / cover";
  } else {
    hambmenu.style.background =
      "url(/public/icon/burger-bar-white.png) center / cover";
  }
});
