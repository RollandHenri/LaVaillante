// Import CSS component //

import "../style/MainEquipes.css";
import U9M1 from "../../public/img/Equipes/U9M1.webp";
import Bureau from "../../public/img/Equipes/Bureau.webp";
import U11F1 from "../../public/img/Equipes/U11F1.webp";
import U11M2 from "../../public/img/Equipes/U11M2.webp";
import U13M1 from "../../public/img/Equipes/U13M1.webp";
import U15M2 from "../../public/img/Equipes/U15M2.webp";
import U18M2 from "../../public/img/Equipes/U18M2.webp";

// Import React //

import { useState, useRef, useEffect } from "react";

// Import Img //

function MainEquipes() {
  const [selectedImg, setSelectedImg] = useState(null);

  const image = [
    {
      id: 1,
      name: "Bureau",
      src: `${Bureau}`,
      description: "Bureau de la Vaillante",
    },
    {
      id: 2,
      name: "U9 F1",
      src: "../../public/img/ActuImg/Noël.webp",
      description: "Equipe U9",
    },

    {
      id: 3,
      name: "U9 M1 / M2",
      src: `${U9M1}`,
      description: "Equipe U9",
    },

    {
      id: 4,
      name: "U11 F1 / F2",
      src: `${U11F1}`,
      description: "Bureau de la Vaillante",
    },

    {
      id: 5,
      name: "U11 M1 / M2",
      src: `${U11M2}`,
      description: "Bureau de la Vaillante",
    },

    {
      id: 6,
      name: "U13 F1",
      src: `${U13M1}`,
      description: "Bureau de la Vaillante",
    },

    {
      id: 7,
      name: "U13 M1",
      src: "../../public/img/Equipes/U13M1.webp",
      description: "Bureau de la Vaillante",
    },

    {
      id: 8,
      name: "U15 M1 / M2",
      src: `${U15M2}`,
      description: "Bureau de la Vaillante",
    },

    {
      id: 9,
      name: "U18 M1 / M2",
      src: `${U18M2}`,
      description: "Bureau de la Vaillante",
    },

    {
      id: 10,
      name: "SENIOR F1",
      src: "../../public/img/bkgd_header.webp",
      description: "Bureau de la Vaillante",
    },
    {
      id: 11,
      name: "SENIOR M1 / M2",
      src: "../../public/img/bkgd_header.webp",
      description: "Bureau de la Vaillante",
    },

    {
      id: 12,
      name: "Loisir",
      src: "../../public/img/bkgd_header.webp",
      description: "Bureau de la Vaillante",
    },
  ];

  const handleImageSelect = (image) => {
    setSelectedImg(image);
  };

  // Observer //

  const btnIntersection = useRef(null);
  const imgIntersection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        for (const entries of entry)
          if (entries.isIntersecting) {
            btnIntersection.current.classList.add("actived");
            imgIntersection.current.classList.add("actived");
          }
      },
      {
        threshold: 0.7,
      }
    );

    observer.observe(btnIntersection.current);
    observer.observe(imgIntersection.current);
  }, []);

  //

  return (
    <>
      <div className="main-equipe-container" id="ancre-equipes">
        <div className="main-equipe-title">
          <h2>Nos Equipes</h2>
        </div>
        <div className="main-equipe-carousel">
          <div className="main-equipe-liste" ref={btnIntersection}>
            {image.map((image) => (
              <button
                key={image.id}
                className={selectedImg?.id === image.id ? "active" : ""}
                onClick={() => handleImageSelect(image)}
              >
                {image.name}
              </button>
            ))}
          </div>

          {selectedImg ? (
            <div className="main-equipe-image">
              <img src={selectedImg.src} alt={selectedImg.name} />
            </div>
          ) : (
            <div className="main-equipe-image" ref={imgIntersection}>
              <img src={Bureau} alt="Bureau de la Vaillante" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainEquipes;
