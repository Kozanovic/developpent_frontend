import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deconnecterUtilisateur } from "../store";

const Navbar = () => {
  const utilisateurConnecte = useSelector((state) => state.utilisateurConnecte);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deconnecterUtilisateur());
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <li>
          <Link to="/">Maghreb Drive</Link>
        </li>
      </h1>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cars">Voitures</Link>
          </li>
          {utilisateurConnecte ? (
            <li>
              <button onClick={handleLogout}>Déconnexion</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Inscription</Link>
              </li>
              <li>
                <Link to="/login">Connexion</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
