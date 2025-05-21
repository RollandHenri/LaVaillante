// Import CSS //

import "../style/Footer.css";
import Facebook from "../../public/logo/facebook_white.webp";
import Logo from "../../public/logo/onglet_pic.webp";

// Import Logo //

// Component //

export default function Footer() {
  return (
    <>
      <footer>
        <ul className="footer-dev">
          <li>
            Site conçu par{" "}
            <span>
              <a target="_blank" href="https://rollandhenri.github.io/">
                Rolland-Dev &copy;
              </a>{" "}
              <br /> Tous droits réservés / 2025
            </span>
          </li>
          <ul className="footer-link top">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#ancre-actu">Actu du Club</a>
            </li>
            <li>
              <a href="#ancre-resultats">Résultats</a>
            </li>
          </ul>
          <ul className="footer-link bottom">
            <li>
              <a href="#ancre-equipe">Nos Equipes</a>
            </li>
            <li>
              <a href="#ancre-boutique">La Boutique</a>
            </li>
            <li>
              <a href="#ancre-contact">Contacts</a>
            </li>
          </ul>
        </ul>

        <ul className="footer-adresse">
          <li>
            <p>La Vaillante de l'Immaculée</p>
            <p>36 Route du Château de Beauregard / 44600 Saint-Nazaire</p>
          </li>
        </ul>

        <ul className="footer-logo">
          <li>
            <img width={"40px"} src={Logo} alt="Logo de la Vaillante" />
          </li>
          <li>
            <a
              href="https://www.facebook.com/vaillanteimmaculeebasket"
              target="_blank"
            >
              <img width={"40px"} src={Facebook} alt="logo facebook" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
