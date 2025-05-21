import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "../style/Carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Camp from "../../public/img/ActuImg/Stage.webp";
import Noel from "../../public/img/ActuImg/Noël.webp";
import Halloween from "../../public/img/ActuImg/halloween.webp";
import Rose from "../../public/img/ActuImg/Rose.webp";
import { useEffect, useRef } from "react";

function Carousel() {
  // Observer //

  const newInterection = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          newInterection.current.classList.add("actived");
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(newInterection.current);
  }, []);

  // //
  return (
    <>
      <div className="carousel-container" ref={newInterection}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-contain">
              <div className="slide-contain-img">
                <a
                  target="_blank"
                  href="https://www.hardwork-association.fr/service-page/stage-saint-nazaire-p%C3%A2ques-2025?fbclid=IwY2xjawKX_HlleHRuA2FlbQIxMABicmlkETF3eFVkNmFTZlR5QkR4WmtVAR5xIRE5BCPkYkD4eRONGRMzB5vwEp_dVTP_HQQwvV5WU2va9V8Goi6ZOl6DYw_aem_l2WNq-vdiSJD_bWTHQPkPA"
                >
                  <img src={Camp} alt="affiche Camp" />
                </a>
              </div>
              <div className="slide-contain-text">
                <h3>Stage Saint-Nazaire Pâques 2025</h3>
                <p>
                  Plus de 5h de basket par jour t'attendent avec notre équipe de
                  coach expérimentée.
                </p>
                <p>
                  Inscrivez vous jusqu'au 23 mars pour bénéficier de l'offre
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-contain">
              <div className="slide-contain-img">
                <img src={Noel} alt="affiche Camp" />
              </div>
              <div className="slide-contain-text">
                <h3>Noël à la Vaillante</h3>
                <p>
                  Notre club la Vaillante a le plaisir d’inviter votre enfant à
                  sa fête de Noël le 14 décembre à partir de 15h30.
                </p>
                <p>
                  Nous vous attendons avec impatience. La commission animation
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-contain">
              <div className="slide-contain-img">
                <img src={Halloween} alt="affiche Halloween" />
              </div>
              <div className="slide-contain-text">
                <h3>Tournois Halloween</h3>
                <p>
                  Comme chaque année notre club organise le tournoi Halloween 🎃
                  pour nos jeunes basketteurs.
                </p>
                <p>
                  Ce tournoi commence à partir de 10h à 18h à la salle de
                  L’Immaculee gymnase Alain Le Port.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-contain">
              <div className="slide-contain-img">
                <img src={Rose} alt="affiche Octobre Rose" />
              </div>
              <div className="slide-contain-text">
                <h3>Octobre Rose</h3>
                <p>
                  Weekend Octobre Rose à la Vaillante ! Venez nombreux soutenir
                  votre club
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
