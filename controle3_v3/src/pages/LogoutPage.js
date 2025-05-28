import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deconnecterUtilisateur } from "../store";

const LogoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deconnecterUtilisateur());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <div className="logout-page">
      <h1>Déconnexion en cours...</h1>
    </div>
  );
};

export default LogoutPage;
