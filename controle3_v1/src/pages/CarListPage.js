import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import MarqueFilter from "../components/MarqueFilter";
import Pagination from "../components/Pagination";

const CarListPage = ({ cars, marques }) => {
  const [voituresFiltrees, setVoituresFiltrees] = useState([]);
  const [voituresAleatoires, setVoituresAleatoires] = useState([]);
  const itemsPerPage = 9;

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
      <Pagination
        items={voituresFiltrees.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default CarListPage;
