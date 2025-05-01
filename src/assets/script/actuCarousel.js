const btn = document.querySelectorAll(".btn-nav");
const slides = document.querySelectorAll(".slide");
console.log(slides);

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    let newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");
    slideActive.classList.remove("active");
  });
});
