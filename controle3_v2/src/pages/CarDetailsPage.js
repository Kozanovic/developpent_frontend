import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const CarDetailsPage = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { cars, utilisateurConnecte } = state;
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <p className="error-message">Voiture introuvable</p>;
  }

  const soumettreReservation = (donneesReservation) => {
    console.log("Réservation effectuée :", donneesReservation);
  };

  return (
    <div className="car-details-page">
      <h1 className="page-title">
        Détails de {car.marque} {car.name}
      </h1>
      <img src={car.image} alt={car.name} className="car-details-image" />
      <p className="car-details-price">Prix par jour : {car.pricePerDay} €</p>
      <p className="car-details-category">Catégorie : {car.category}</p>

      {utilisateurConnecte ? (
        <BookingForm car={car} onSubmit={soumettreReservation} />
      ) : (
        <p className="login-prompt">
          Veuillez <Link to="/login">vous connecter</Link> pour réserver cette
          voiture.
        </p>
      )}
    </div>
  );
};

export default CarDetailsPage;
