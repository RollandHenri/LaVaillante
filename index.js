const hambMenu = document.querySelector(".button");
const hambMenuLink = document.querySelector(".nav-link");

hambMenu.addEventListener("click", () => {
  if (hambMenuLink.style.opacity !== "1") {
    hambMenuLink.style.opacity = "1";
  } else {
    hambMenuLink.style.opacity = "0";
  }
});
