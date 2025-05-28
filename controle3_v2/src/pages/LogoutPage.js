import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const LogoutPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "DECONNECTER_UTILISATEUR" });
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <div className="logout-page">
      <h1>Déconnexion en cours...</h1>
    </div>
  );
};

export default LogoutPage;