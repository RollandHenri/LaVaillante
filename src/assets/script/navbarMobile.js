const hambmenu = document.querySelector(".nav-hamb-logo");
const hambmenuClose = document.querySelector(".nav-hamb-logo-close");
const menu = document.querySelector(".navbar");
const link = document.querySelectorAll(".linkHamb");
console.log(link);

hambmenu.addEventListener("click", () => {
  hambmenu.style.transform = "rotateY(90deg)";
  hambmenu.style.opacity = "0";
  hambmenuClose.style.transform = " rotateY(0deg)";
  hambmenuClose.style.opacity = "1";
  menu.style.right = "0";
  menu.style.opacity = "1";
});

hambmenuClose.addEventListener("click", () => {
  hambmenu.style.transform = "rotateY(0deg)";
  hambmenu.style.opacity = "1";
  hambmenuClose.style.transform = " rotateY(90deg)";
  hambmenuClose.style.opacity = "0";
  menu.style.right = "-80%";
  menu.style.opacity = "0";
});

link.forEach((item) => {
  item.addEventListener("click", () => {
    hambmenu.style.transform = "rotateY(0deg)";
    hambmenu.style.opacity = "1";
    hambmenuClose.style.transform = " rotateY(90deg)";
    hambmenuClose.style.opacity = "0";
    menu.style.right = "-80%";
    menu.style.opacity = "0";
  });
});
