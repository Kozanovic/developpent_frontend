import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ utilisateurConnecte }) => {
  const [menuOuvert, setMenuOuvert] = useState(false);

  const basculerMenu = () => {
    setMenuOuvert(!menuOuvert);
  };

  const fermerMenu = () => {
    setMenuOuvert(false);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Maghreb Drive</h1>
      <div className={`navbar-links ${menuOuvert ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={fermerMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/cars" onClick={fermerMenu}>
              Voitures
            </Link>
          </li>
          {utilisateurConnecte ? (
            <>
              <li>
                <Link to="/logout" onClick={fermerMenu}>
                  Déconnexion
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup" onClick={fermerMenu}>
                  Inscription
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={fermerMenu}>
                  Connexion
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="hamburger" onClick={basculerMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;