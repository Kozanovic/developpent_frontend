import React, { useState, useEffect } from "react";

const MarqueFilter = ({ marques, onSelectMarque, onSelectVoiture }) => {
  const [marqueSelectionnee, setMarqueSelectionnee] = useState("");
  const [voitureSelectionnee, setVoitureSelectionnee] = useState("");
  const [listeVoitures, setListeVoitures] = useState([]);

  useEffect(() => {
    if (marqueSelectionnee) {
      const marqueData = marques.find((m) => m.marque === marqueSelectionnee);
      setListeVoitures(marqueData.voitures);
    } else {
      setListeVoitures([]);
    }
    setVoitureSelectionnee("");
  }, [marqueSelectionnee, marques]);

  const changerMarque = (e) => {
    setMarqueSelectionnee(e.target.value);
    onSelectMarque(e.target.value);
  };

  const changerVoiture = (e) => {
    setVoitureSelectionnee(e.target.value);
    onSelectVoiture(e.target.value);
  };

  return (
    <div className="marque-filter">
      <div>
        <label>Filtrer par marque :</label>
        <select value={marqueSelectionnee} onChange={changerMarque}>
          <option value="">Toutes les marques</option>
          {marques.map((marque) => (
            <option key={marque.marque} value={marque.marque}>
              {marque.marque}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filtrer par voiture :</label>
        <select value={voitureSelectionnee} onChange={changerVoiture} disabled={!marqueSelectionnee}>
          <option value="">Toutes les voitures</option>
          {listeVoitures.map((voiture) => (
            <option key={voiture.id} value={voiture.name}>
              {voiture.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MarqueFilter;