import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <h3 className="car-name">
        {car.marque} {car.name}
      </h3>
      <p className="car-category">Catégorie : {car.category}</p>
      <p className="car-price">Prix par jour : {car.pricePerDay} €</p>
      <Link to={`/cars/${car.id}`}>
        <button className="car-details-button">Voir Détails</button>
      </Link>
    </div>
  );
};

export default CarCard;