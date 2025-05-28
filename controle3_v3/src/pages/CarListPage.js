import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CarCard from "../components/CarCard";
import MarqueFilter from "../components/MarqueFilter";

const CarListPage = () => {
  const { cars, marques } = useSelector((state) => state);
  const [voituresFiltrees, setVoituresFiltrees] = useState([]);
  const [voituresAleatoires, setVoituresAleatoires] = useState([]);

  useEffect(() => {
    const voituresMelangees = [...cars].sort(() => Math.random() - 0.5);
    setVoituresAleatoires(voituresMelangees);
    setVoituresFiltrees(voituresMelangees);
  }, [cars]);

  const selectionnerMarque = (marque) => {
    if (marque === "") {
      setVoituresFiltrees(voituresAleatoires);
    } else {
      const marqueSelectionnee = marques.find((m) => m.marque === marque);
      const voituresMarqueMelangees = [...marqueSelectionnee.voitures].sort(
        () => Math.random() - 0.5
      );
      setVoituresFiltrees(voituresMarqueMelangees);
    }
  };

  const selectionnerVoiture = (voiture) => {
    if (voiture === "") {
      setVoituresFiltrees(voituresAleatoires);
    } else {
      const filtrees = cars.filter((car) => car.name === voiture);
      setVoituresFiltrees(filtrees);
    }
  };

  return (
    <div className="car-list-page">
      <h1 className="page-title">Liste des voitures</h1>
      <MarqueFilter
        marques={marques}
        onSelectMarque={selectionnerMarque}
        onSelectVoiture={selectionnerVoiture}
      />
      <div className="car-list">
        {voituresFiltrees.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListPage;
