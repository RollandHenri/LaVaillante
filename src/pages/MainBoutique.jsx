// Import CSS //

import "../style/MainBoutique.css";
import Shop from "../../public/img/shop.webp";

// Component //

import { useEffect, useRef } from "react";

export default function MainBoutique() {
  // Observer //

  const textIntersection = useRef(null);
  const imgIntersection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        for (const entries of entry)
          if (entries.isIntersecting) {
            textIntersection.current.classList.add("actived");
            imgIntersection.current.classList.add("actived");
          }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(textIntersection.current);
    observer.observe(imgIntersection.current);
  }, []);

  // //

  return (
    <>
      <div className="main-boutique-container" id="ancre-boutique">
        <h2>La boutique</h2>

        <div className="main-boutique-contain">
          <div className="main-boutique-title" ref={textIntersection}>
            <div className="main-boutique-para">
              <p>
                La Vaillante est heureuse de vous présenter sa gamme de
                vêtements de qualité à l'effigie du club. N'hésitez pas à
                personnaliser vos vêtements avec votre numéro fétiche, vos
                initiales ou votre prénom.
              </p>
            </div>
          </div>

          <div className="main-boutique-shop" ref={imgIntersection}>
            <a
              target="_blank"
              href="https://www.helloasso.com/associations/vaillante-immaculee-basket/boutiques/la-boutique-de-la-vaillante-immaculee-basket-2023-2024?utm_source=app_ha&utm_campaign=share_campaign_button&utm_medium=ios"
            >
              <img
                className="shop-img"
                src={Shop}
                alt="Boutique en ligne de la Vaillante"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
