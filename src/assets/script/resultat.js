// Variables Btn //

const match = document.querySelector(".matchs");
const resultat = document.querySelector(".resultats");

// Variable tableau classement et resultats //

const tabResultats = document.querySelector(".main-container-classement");
const tabMatchs = document.querySelector(".main-container-resultats");

// Btn effect active //

const btnMatch = document.getElementById("matchs");
const btnResultat = document.getElementById("classements");

btnMatch.addEventListener("click", () => {
  if (btnMatch.classList.contains("active")) {
    return;
  } else {
    btnMatch.classList.add("active");
    btnResultat.classList.remove("active");
  }
});

btnResultat.addEventListener("click", () => {
  if (btnResultat.classList.contains("active")) {
    return;
  } else {
    btnResultat.classList.add("active");
    btnMatch.classList.remove("active");
  }
});

// Carousel tab Match et Resultat //

match.addEventListener("click", () => {
  tabMatchs.style.opacity = "1";
  tabMatchs.style.transition = "opacity 0.5s ease-in-out";
  tabResultats.style.opacity = "0";
  tabResultats.style.transform = "translateX(-100%)";
});

resultat.addEventListener("click", () => {
  tabMatchs.style.opacity = "0";
  tabResultats.style.transform = "translateX(0%)";
  tabResultats.style.opacity = "1";
  tabResultats.style.transition = "opacity 0.5s ease-in-out";
});
