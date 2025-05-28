import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import "../App.css";

const HomePage = ({ utilisateurConnecte, cars }) => {
  const [voituresAleatoires, setVoituresAleatoires] = useState([]);
  const [termeRecherche, setTermeRecherche] = useState("");
  const [voituresFiltrees, setVoituresFiltrees] = useState([]);
  const [toutesVoitures, setToutesVoitures] = useState([]);
  const [afficherMessageBienvenue, setAfficherMessageBienvenue] = useState(false);

  useEffect(() => {
    const voituresMelangees = [...cars].sort(() => Math.random() - 0.5);
    setVoituresAleatoires(voituresMelangees.slice(0, 6));
    setToutesVoitures(voituresMelangees);
    setVoituresFiltrees(voituresMelangees.slice(0, 6));
  }, [cars]);

  useEffect(() => {
    if (termeRecherche.trim() === "") {
      setVoituresFiltrees(voituresAleatoires);
    } else {
      const resultats = toutesVoitures.filter(
        (car) =>
          car.name.toLowerCase().includes(termeRecherche.toLowerCase()) ||
          car.marque.toLowerCase().includes(termeRecherche.toLowerCase())
      );
      setVoituresFiltrees(resultats);
    }
  }, [termeRecherche, toutesVoitures, voituresAleatoires]);

  useEffect(() => {
    if (utilisateurConnecte) {
      setAfficherMessageBienvenue(true);
      const timer = setTimeout(() => {
        setAfficherMessageBienvenue(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [utilisateurConnecte]);

  const masquerMessageBienvenue = () => {
    setAfficherMessageBienvenue(false);
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Bienvenue sur Maghreb Drive</h1>
        <p>
          Découvrez le Maroc, roulez avec Maghreb Drive. Trouvez la voiture parfaite pour votre
          prochain voyage. Nous proposons une large gamme de véhicules pour répondre à tous vos
          besoins.
        </p>
        <Link to="/cars" className="cta-button">
          Voir nos voitures
        </Link>
      </section>

      {afficherMessageBienvenue && utilisateurConnecte && (
        <div className="welcome-message">
          <p>Vous êtes maintenant connecté !</p>
          <button onClick={masquerMessageBienvenue} className="close-button">
            ×
          </button>
        </div>
      )}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher par nom de voiture ou marque..."
          value={termeRecherche}
          onChange={(e) => setTermeRecherche(e.target.value)}
        />
      </div>

      <div className="car-list">
        {voituresFiltrees.length > 0 ? (
          voituresFiltrees.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="no-results">Aucune voiture trouvée.</p>
        )}
      </div>

      <section className="services-section">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Location à court terme</h3>
            <p>
              Louez une voiture pour quelques heures ou quelques jours. Parfait pour les déplacements
              rapides.
            </p>
          </div>
          <div className="service-card">
            <h3>Location à long terme</h3>
            <p>
              Besoin d'une voiture pour plusieurs semaines ou mois ? Nous avons des offres adaptées
              à vos besoins.
            </p>
          </div>
          <div className="service-card">
            <h3>Voitures de luxe</h3>
            <p>
              Découvrez notre sélection de voitures haut de gamme pour des occasions spéciales.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Pourquoi choisir Maghreb Drive ?</h2>
        <p>
          Nous nous engageons à vous offrir un service de qualité, des tarifs compétitifs et une
          expérience client exceptionnelle. Notre équipe est à votre disposition pour vous aider à
          trouver la voiture idéale.
        </p>
      </section>
    </div>
  );
};

export default HomePage;