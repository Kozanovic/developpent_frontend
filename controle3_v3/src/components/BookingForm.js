import React, { useState } from "react";
import { useSelector } from "react-redux";

const BookingForm = ({ car, onSubmit }) => {
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const utilisateurConnecte = useSelector((state) => state.utilisateurConnecte);

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (utilisateurConnecte) {
      onSubmit({
        dateDebut,
        dateFin,
        carId: car.id,
        userId: utilisateurConnecte.id,
      });
    } else {
      alert("Veuillez vous connecter pour réserver une voiture.");
    }
  };

  return (
    <form onSubmit={soumettreFormulaire} className="booking-form">
      <h2 className="booking-title">Réserver {car.name}</h2>
      <label className="booking-label">Date de début :</label>
      <input
        type="date"
        value={dateDebut}
        onChange={(e) => setDateDebut(e.target.value)}
        className="booking-input"
        required
      />
      <label className="booking-label">Date de fin :</label>
      <input
        type="date"
        value={dateFin}
        onChange={(e) => setDateFin(e.target.value)}
        className="booking-input"
        required
      />
      <button type="submit" className="booking-button">
        Réserver
      </button>
    </form>
  );
};

export default BookingForm;
