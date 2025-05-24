import "../style/navbar.css";
import Logo from "../../public/logo/onglet_pic.webp";
import Face from "../../public/logo/facebook_white.webp";
import Insta from "../../public/logo/instagram_white.webp";
import { NavLink } from "react-router-dom";

function Navigation() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (
      window.scrollY > 200 &&
      window.matchMedia("(min-width: 820px").matches
    ) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  });
  return (
    <>
      {" "}
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo de la Vaillante" />
        </div>
        <ul className="navbar-link">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#ancre-actu">Actu du Club</a>
          </li>
          <li>
            <a href="#ancre-resultats">Résultats</a>
          </li>
          <li>
            <a href="#ancre-equipes">Nos Equipes</a>
          </li>
          <li>
            <a href="#ancre-boutique">La Boutique</a>
          </li>
          <li>
            <a href="#ancre-contact">Contacts</a>
          </li>
        </ul>
        <ul className="navbar-social">
          <li>
            <a
              href="https://www.facebook.com/vaillanteimmaculeebasket"
              target="_blank"
            >
              <img src={Face} alt="logo facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lavaillantebasket/"
              target="_blank"
            >
              <img src={Insta} alt="logo instagram" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
