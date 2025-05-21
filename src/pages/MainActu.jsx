import Carousel from "../components/Carousel";
import "../style/MainActu.css";

function MainActu() {
  return (
    <>
      <div className="carousel" id="ancre-actu">
        <div className="bkgd-blur">
          <div className="bkgd-gradiant">
            <h2>Toute l'actualité du Club</h2>
            <Carousel />
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default MainActu;
