import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CarListPage from "./pages/CarListPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import carsData from "./data/cars.json";
import "./App.css";

const App = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [utilisateurConnecte, setUtilisateurConnecte] = useState(null);

  const ajouterUtilisateur = (nouvelUtilisateur) => {
    setUtilisateurs([...utilisateurs, nouvelUtilisateur]);
  };

  const verifierIdentifiants = (email, password) => {
    const utilisateur = utilisateurs.find(
      (user) => user.email === email && user.password === password
    );
    if (utilisateur) {
      setUtilisateurConnecte(utilisateur);
      return utilisateur;
    }
    return null;
  };

  const deconnecterUtilisateur = () => {
    setUtilisateurConnecte(null);
  };

  const marques = carsData.marques;
  const cars = marques.flatMap((marque) =>
    marque.voitures.map((voiture) => ({
      ...voiture,
      marque: marque.marque,
    }))
  );

  return (
    <Router>
      <Navbar utilisateurConnecte={utilisateurConnecte} />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={<HomePage utilisateurConnecte={utilisateurConnecte} cars={cars} />}
          />
          <Route
            path="/cars"
            element={<CarListPage cars={cars} marques={marques} />}
          />
          <Route
            path="/cars/:id"
            element={<CarDetailsPage utilisateurConnecte={utilisateurConnecte} cars={cars} />}
          />
          <Route path="/signup" element={<SignupPage ajouterUtilisateur={ajouterUtilisateur} />} />
          <Route
            path="/login"
            element={<LoginPage verifierIdentifiants={verifierIdentifiants} />}
          />
          <Route
            path="/logout"
            element={<LogoutPage deconnecterUtilisateur={deconnecterUtilisateur} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;