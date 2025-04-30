const hambMenu = document.querySelector(".button");
const hambMenuLink = document.querySelector(".nav-link");
const linkHambMenu = document.querySelectorAll(".linkHamb");
const bkgdHambMenu = document.querySelector(".background");
const checkHambMenu = document.querySelector(".checkbox");

console.log(checkHambMenu);

hambMenu.addEventListener("click", () => {
  if (hambMenuLink.style.opacity !== "1") {
    hambMenuLink.style.opacity = "1";
    hambMenuLink.style.right = "0";
  } else {
    hambMenuLink.style.opacity = "0";
    hambMenuLink.style.right = "-100%";
  }
});

linkHambMenu.forEach((link) => {
  link.addEventListener("click", () => {
    hambMenuLink.style.opacity = "0";
    hambMenuLink.style.right = "-100%";
    bkgdHambMenu.style.transform = "scale(0)";
    checkHambMenu.checked = false;
  });
});
