const hambmenu = document.querySelector(".nav-hamb-logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1050) {
    hambmenu.style.background =
      "url(/public/icon/burger-bar.webp) center / cover";
  } else {
    hambmenu.style.background =
      "url(/public/icon/burger-bar-white.webp) center / cover";
  }
});
