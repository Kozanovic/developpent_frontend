import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ deconnecterUtilisateur }) => {
  const navigate = useNavigate();

  useEffect(() => {
    deconnecterUtilisateur();
    navigate("/");
  }, [deconnecterUtilisateur, navigate]);

  return (
    <div className="logout-page">
      <h1>Déconnexion en cours...</h1>
    </div>
  );
};

export default LogoutPage;