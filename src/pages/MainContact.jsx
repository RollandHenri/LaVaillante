// Import CSS //

import { useEffect, useRef } from "react";
import "../style/MainContact.css";
import Map from "../../public/img/map.webp";
import Face from "../../public/logo/facebook_white.webp";

// Component //

export default function MainContact() {
  const mapIntersection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        for (const entries of entry)
          if (entries.isIntersecting) {
            mapIntersection.current.style.opacity = "1";
            mapIntersection.current.style.transition = "all 0.5s ease";
          }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(mapIntersection.current);
  });

  return (
    <>
      <div className="main-contact-container" id="ancre-contact">
        <h2> Contact</h2>
        <div className="main-contact-contain">
          <div className="main-contact-map" ref={mapIntersection}>
            <a
              target="_blank"
              href="https://www.google.fr/maps/place/La+vaillante+de+l'immacul%C3%A9e/@47.2847918,-2.2605,17z/data=!3m1!4b1!4m6!3m5!1s0x480566166ca9972d:0x54733ec8824f9e26!8m2!3d47.2847918!4d-2.2579197!16s%2Fg%2F11b6dgj4q8?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
            >
              <img src={Map} alt="Adresse de la vaillante" />
            </a>
          </div>
          <div className="main-contact-mail">
            <div className="main-contact-top">
              <h4>Coordonées</h4>
              <p>Email: vaillanteimmaculeebasket@gmail.com</p>
            </div>
            <div className="main-contact-middle">
              <h4>Adresse</h4>
              <p>
                La Vaillante de l'Immaculée 36 Route du Château de Beauregard /
                44600 Saint-Nazaire
              </p>
            </div>
            <div className="main-contact-bottom">
              <h4>Retrouvez nous également sur Facebook</h4>
              <a
                target="_blank"
                href="https://www.facebook.com/vaillanteimmaculeebasket/about"
              >
                <img src={Face} alt="logo Facebook" width={"50px"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
