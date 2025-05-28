import { createStore } from "redux";
import img from "./img.jpeg";
const initialisation = {
  stagiaires: [
    {
      image: img,
      nom: "Zaid",
      prenom: "Riyad",
      filiere: "TDI",
    },
  ],
  image: "",
  nom: "",
  prenom: "",
  filiere: "",
};

const reset = {
  image: "",
  nom: "",
  prenom: "",
  filiere: "",
};
const reducer = (state = initialisation, action) => {
  switch (action.type) {
    case "setter":
      return { ...state, [action.payload.champ]: action.payload.value };
    case "add_stagiaire":
      const nvStagiaire = {
        image: state.image,
        nom: state.nom,
        prenom: state.prenom,
        filiere: state.filiere,
      };
      return {
        ...state,
        stagiaires: [...state.stagiaires, nvStagiaire],
        ...reset,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
