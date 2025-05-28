import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ verifierIdentifiants }) => {
  const [identifiants, setIdentifiants] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const seConnecter = (e) => {
    e.preventDefault();
    const { email, password } = identifiants;

    const utilisateur = verifierIdentifiants(email, password);
    if (utilisateur) {
      console.log("Connexion réussie !");
      navigate("/", { state: { utilisateur } });
    } else {
      alert("Identifiants incorrects !");
    }
  };

  return (
    <form onSubmit={seConnecter} className="login-form">
      <h1 className="form-title">Connexion</h1>
      <label className="form-label">Email :</label>
      <input
        type="email"
        value={identifiants.email}
        onChange={(e) =>
          setIdentifiants({ ...identifiants, email: e.target.value })
        }
        className="form-input"
        required
      />
      <label className="form-label">Mot de passe :</label>
      <input
        type="password"
        value={identifiants.password}
        onChange={(e) =>
          setIdentifiants({ ...identifiants, password: e.target.value })
        }
        className="form-input"
        required
      />
      <button type="submit" className="form-button">
        Se connecter
      </button>
      <Link to="/signup" className="form-link">
        S'inscrire
      </Link>
    </form>
  );
};

export default LoginPage;