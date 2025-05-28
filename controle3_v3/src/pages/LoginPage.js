import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { connecterUtilisateur } from "../store";

const LoginPage = () => {
  const [identifiants, setIdentifiants] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const utilisateurs = useSelector((state) => state.utilisateurs);

  const seConnecter = (e) => {
    e.preventDefault();
    const { email, password } = identifiants;

    const utilisateur = utilisateurs.find(
      (user) => user.email === email && user.password === password
    );
    if (utilisateur) {
      dispatch(connecterUtilisateur(utilisateur));
      navigate("/");
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
