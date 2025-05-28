import { createStore } from "redux";
import axios from "axios";

const initialState = {
  utilisateurs: [],
  utilisateurConnecte: null,
  cars: [],
  marques: [],
};

const AJOUTER_UTILISATEUR = "AJOUTER_UTILISATEUR";
const CONNECTER_UTILISATEUR = "CONNECTER_UTILISATEUR";
const DECONNECTER_UTILISATEUR = "DECONNECTER_UTILISATEUR";
const CHARGER_VOITURES = "CHARGER_VOITURES";

export const ajouterUtilisateur = (utilisateur) => ({
  type: AJOUTER_UTILISATEUR,
  payload: utilisateur,
});

export const connecterUtilisateur = (utilisateur) => ({
  type: CONNECTER_UTILISATEUR,
  payload: utilisateur,
});

export const deconnecterUtilisateur = () => ({
  type: DECONNECTER_UTILISATEUR,
});

export const chargerVoitures = (cars, marques) => ({
  type: CHARGER_VOITURES,
  payload: { cars, marques },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case AJOUTER_UTILISATEUR:
      return {
        ...state,
        utilisateurs: [...state.utilisateurs, action.payload],
      };
    case CONNECTER_UTILISATEUR:
      return { ...state, utilisateurConnecte: action.payload };
    case DECONNECTER_UTILISATEUR:
      return { ...state, utilisateurConnecte: null };
    case CHARGER_VOITURES:
      return {
        ...state,
        cars: action.payload.cars,
        marques: action.payload.marques,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

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
    store.dispatch(chargerVoitures(cars, marques));
  })
  .catch((error) => {
    console.error("Erreur lors du chargement des voitures :", error);
  });

export default store;
