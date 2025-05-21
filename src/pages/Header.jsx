import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import "../style/Header.css";
import "../style/navbar.css";
import Menu from "../../public/icon/menu_blue.webp";
import MenuClose from "../../public/icon/croix_blue.webp";

// Import Img Carousel //

import bkgd1 from "../../public/img/bkgd_header/bkgd1.webp";
import bkgd2 from "../../public/img/bkgd_header/bkgd2.webp";
import bkgd3 from "../../public/img/bkgd_header/bkgd3.webp";
import bkgd4 from "../../public/img/bkgd_header/bkgd4.webp";

// //

function Header() {
  const [navbar, setNavbar] = useState(false);

  const handleChange = () => {
    const nav = document.querySelector(".navbar");
    const open = document.querySelector(".open");
    const close = document.querySelector(".close");
    const link = document.querySelectorAll(".navbar-link a");
    if (navbar != true) {
      setNavbar(true);
      nav.classList.add("active");
      open.classList.add("open-active");
      close.classList.add("close-active");
    } else {
      setNavbar(false);
      nav.classList.remove("active");
      open.classList.remove("open-active");
      close.classList.remove("close-active");
    }

    link.forEach((item) => {
      item.addEventListener("click", () => {
        nav.classList.remove("active");
        open.classList.remove("open-active");
        close.classList.remove("close-active");
        setNavbar(false);
      });
    });
  };

  // Carousel Header //
  const bkgdImg = [bkgd1, bkgd2, bkgd3, bkgd4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bkgdImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [bkgdImg.length]);
  // //

  return (
    <>
      <div className="header-hero">
        {bkgdImg.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="navbar-hamb-menu" onClick={handleChange}>
          <span className="hamb-menu">
            <img className="open" src={Menu} alt="" />
            <img className="close" src={MenuClose} alt="" />
          </span>
        </div>
        <Navigation />
        <h1>
          <svg className="desktop" viewBox="0 0 2800 300">
            <text x="50%" y="80%" dy=".35em" textAnchor="middle">
              La Vaillante Basket Club
            </text>
          </svg>
          <div className="main-hero-mobile">
            <svg viewBox="0 0 2800 300">
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                La Vaillante
              </text>
              <text x="50%" y="190%" dy=".35em" textAnchor="middle">
                Basket Club
              </text>
            </svg>
          </div>
        </h1>
      </div>
    </>
  );
}

export default Header;
