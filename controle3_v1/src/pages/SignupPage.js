import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = ({ ajouterUtilisateur }) => {
  const [donneesFormulaire, setDonneesFormulaire] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    ajouterUtilisateur(donneesFormulaire);
    console.log("Données soumises :", donneesFormulaire);
    navigate('/login');
  };

  return (
    <form onSubmit={soumettreFormulaire} className="signup-form">
      <h1 className="form-title">Inscription</h1>
      <label className="form-label">Nom :</label>
      <input
        type="text"
        value={donneesFormulaire.name}
        onChange={(e) => setDonneesFormulaire({ ...donneesFormulaire, name: e.target.value })}
        className="form-input"
        required
      />
      <label className="form-label">Email :</label>
      <input
        type="email"
        value={donneesFormulaire.email}
        onChange={(e) => setDonneesFormulaire({ ...donneesFormulaire, email: e.target.value })}
        className="form-input"
        required
      />
      <label className="form-label">Mot de passe :</label>
      <input
        type="password"
        value={donneesFormulaire.password}
        onChange={(e) => setDonneesFormulaire({ ...donneesFormulaire, password: e.target.value })}
        className="form-input"
        required
      />
      <button type="submit" className="form-button">S'inscrire</button>
      <Link to="/login" className="form-link">Se connecter</Link>
    </form>
  );
};

export default SignupPage;