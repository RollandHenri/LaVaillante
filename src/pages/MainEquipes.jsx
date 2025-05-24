// Import //
import { useKeenSlider } from "keen-slider/react";
// import { useRef, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import "../style/MainEquipes.css";

// Import IMG //

import Bureau from "../../public/img/Equipes/Bureau.webp";
import U9M1 from "../../public/img/Equipes/U9M1.webp";
import U11F1 from "../../public/img/Equipes/U11F1.webp";
import U11M2 from "../../public/img/Equipes/U11M2.webp";
import U13M1 from "../../public/img/Equipes/U13M1.webp";
import U15M2 from "../../public/img/Equipes/U15M2.webp";
import U18M1 from "../../public/img/Equipes/U18M1.webp";

// End import IMG //

function MainEquipes() {
  // Start Observer //

  // const btnIntersection = useRef(null);
  // const imgIntersection = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entry) => {
  //       for (const entries of entry)
  //         if (entries.isIntersecting) {
  //           btnIntersection.current.classList.add("actived");
  //           imgIntersection.current.classList.add("actived");
  //         }
  //     },
  //     {
  //       threshold: 0.7,
  //     }
  //   );

  //   observer.observe(btnIntersection.current);
  //   observer.observe(imgIntersection.current);
  // }, []);

  // End Observer //

  // Start Carousel //

  function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active");
        });
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active");
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx);
          });
        });
      }

      slider.on("created", () => {
        if (!mainRef.current) return;
        addActive(slider.track.details.rel);
        addClickEvents();
        mainRef.current.on("animationStarted", (main) => {
          removeActive();
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next));
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        });
      });
    };
  }

  // End Carousel //

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="main-equipe-container" id="ancre-equipes">
        <div className="main-equipe-title">
          <h2>Nos Equipes</h2>
        </div>

        <div className="main-equipe-carousel-container">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1 slide">
              <div className="slide-contain-equipe">
                <img src={Bureau} alt="Photo du bureau de la Vaillante" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide2 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide3 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide4 slide">
              <div className="slide-contain-equipe">
                <img src={U9M1} alt="Photo équipe U9M1" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide5 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide6 slide">
              <div className="slide-contain-equipe">
                <img src={U11F1} alt="Photo équipe U11F1" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide7 slide">
              <div className="slide-contain-equipe">
                <img src={U11M2} alt="Photo équipe U11M2" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide8 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide9 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide10 slide">
              <div className="slide-contain-equipe">
                <img src={U13M1} alt="Photo équipe U13M1" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide11 slide">
              <div className="slide-contain-equipe">
                <img src={U15M2} alt="Photo équipe U15M2" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide12 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide12 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide12 slide">
              <div className="slide-contain-equipe">
                <img src={U18M1} alt="Photo équipe U18M1" />
              </div>
            </div>
            <div className="keen-slider__slide number-slide12 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide12 slide">
              <div className="slide-contain-equipe"></div>
            </div>
            <div className="keen-slider__slide number-slide12 slide">
              <div className="slide-contain-equipe"></div>
            </div>
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail">
            <div className="keen-slider__slide number-slide1 thumbnail-contain thumbnail-bureau">
              <p>Bureau</p>
            </div>
            <div className="keen-slider__slide number-slide2 thumbnail-contain thumbnail-U9F1">
              <p>U9 F1</p>
            </div>
            <div className="keen-slider__slide number-slide3 thumbnail-contain thumbnail-U9M2">
              <p>U9 M2</p>
            </div>
            <div className="keen-slider__slide number-slide4 thumbnail-contain thumbnail-U9M1">
              <p>U9 M1</p>
            </div>
            <div className="keen-slider__slide number-slide5 thumbnail-contain thumbnail-U11F2">
              <p>U11 F2</p>
            </div>
            <div className="keen-slider__slide number-slide6 thumbnail-contain thumbnail-U11F1">
              <p>U11 F1</p>
            </div>
            <div className="keen-slider__slide number-slide7 thumbnail-contain thumbnail-U11M2">
              <p>U11 M2</p>
            </div>
            <div className="keen-slider__slide number-slide8 thumbnail-contain thumbnail-U11M1">
              <p>U11 M1</p>
            </div>
            <div className="keen-slider__slide number-slide9 thumbnail-contain thumbnail-U13F1">
              <p>U13 F1</p>
            </div>
            <div className="keen-slider__slide number-slide10 thumbnail-contain thumbnail-U13M1">
              <p>U13 M1</p>
            </div>
            <div className="keen-slider__slide number-slide11 thumbnail-contain thumbnail-U15M2">
              <p>U15 M2</p>
            </div>
            <div className="keen-slider__slide number-slide12 thumbnail-contain thumbnail-U15M1">
              <p>U15 M1</p>
            </div>
            <div className="keen-slider__slide number-slide12 thumbnail-contain thumbnail-U18M2">
              <p>U18 M2</p>
            </div>
            <div className="keen-slider__slide number-slide12 thumbnail-contain thumbnail-U18M1">
              <p>U18 M1</p>
            </div>
            <div className="keen-slider__slide number-slide12 thumbnail-contain thumbnail-seniorF1">
              <p>Senior F1</p>
            </div>
            <div className="keen-slider__slide number-slide12 thumbnail-contain thumbnail-seniorM2">
              <p>Senior M2</p>
            </div>
            <div className="keen-slider__slide number-slide12 thumbnail-contain thumbnail-seniorM1">
              <p>Seniro M1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainEquipes;
