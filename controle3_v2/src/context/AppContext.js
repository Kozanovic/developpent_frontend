import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  utilisateurs: [],
  utilisateurConnecte: null,
  cars: [],
  marques: [],
};

const AppContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "AJOUTER_UTILISATEUR":
      return {
        ...state,
        utilisateurs: [...state.utilisateurs, action.payload],
      };
    case "CONNECTER_UTILISATEUR":
      return { ...state, utilisateurConnecte: action.payload };
    case "DECONNECTER_UTILISATEUR":
      return { ...state, utilisateurConnecte: null };
    case "CHARGER_VOITURES":
      return {
        ...state,
        cars: action.payload.cars,
        marques: action.payload.marques,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("/cars.json")
      .then((response) => {
        const marques = response.data.marques;
        const cars = marques.flatMap((marque) =>
          marque.voitures.map((voiture) => ({
            ...voiture,
            marque: marque.marque,
          }))
        );
        dispatch({ type: "CHARGER_VOITURES", payload: { cars, marques } });
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des voitures :", error);
      });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
