import { useRef, useEffect } from "react";
import "../style/MainFetch.css";

function MainFetch() {
  const handleChangeResultat = () => {
    const resultat = document.querySelector(".main-actu-match");
    const classement = document.querySelector(".main-actu-resultat");
    const btnResultat = document.getElementById("resultat");
    const btnClassement = document.getElementById("classement");
    resultat.style.opacity = "1";
    resultat.style.transform = "translateX(0)";
    classement.style.opacity = "0";
    classement.style.transform = "translate(-100%)";
    btnResultat.classList.add("active");
    btnClassement.classList.remove("active");
  };

  const handleChangeClassement = () => {
    const resultat = document.querySelector(".main-actu-match");
    const classement = document.querySelector(".main-actu-resultat");
    const btnResultat = document.getElementById("resultat");
    const btnClassement = document.getElementById("classement");
    classement.style.opacity = "1";
    classement.style.transform = "translateX(0)";
    resultat.style.opacity = "0";
    resultat.style.transform = "translateX(100%)";
    btnResultat.classList.remove("active");
    btnClassement.classList.add("active");
  };

  // Observer //
  const btn1Intersection = useRef(null);
  const btn2Intersection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        for (const enter of entry)
          if (enter.isIntersecting) {
            btn1Intersection.current.classList.add("actived");
            btn2Intersection.current.classList.add("actived");
          }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(btn1Intersection.current);
    observer.observe(btn2Intersection.current);
  }, []);

  // //

  return (
    <>
      <div className="main-actu-container" id="ancre-resultats">
        <h2>Résultats et Classement</h2>
        <div className="main-actu-btn">
          <button
            id="resultat"
            className="active"
            ref={btn1Intersection}
            onClick={handleChangeResultat}
          >
            <span>Résultats</span>
          </button>
          <button id="classement" ref={btn2Intersection} onClick={handleChangeClassement}>
            <span> Classement </span>
          </button>
        </div>
        <div className="main-actu-fetch">
          <div className="main-actu-match">
            <iframe
              title="match"
              className="fetch-match"
              src="https://widgets.scorenco.com/previous-next/107079"
              style={{
                height: "500px",
                width: "100%",
                border: "0",
                borderWidth: "0",
              }}
              frameBorder="0"
              height="500"
              width="100%"
            >
              Vaillante Immaculee St Nazaire
            </iframe>
          </div>
          <div className="main-actu-resultat">
            <iframe
              title="classement"
              className="fetch-classement"
              src="https://widgets.scorenco.com/ranking/107080"
              style={{
                height: "750px",
                width: "100%",
                border: "0",
                borderWidth: "0",
              }}
              frameBorder="0"
              height="auto"
              width="100%"
            >
              Vaillante Immaculee St Nazaire
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFetch;
