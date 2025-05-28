import { useReducer } from "react";
import "./App.css";
import data from "./etudiants.json";

export default function App() {
  const initialiserState = { compteur: 0, nombre: 0, etudiants: data };

  const reducer = (state, action) => {
    switch (action.type) {
      case "incrémenter":
        return { ...state, compteur: state.compteur + action.payload };
      case "Décrémenter":
        return { ...state, compteur: state.compteur - action.payload };
      case "init":
        return { ...state, compteur: 0 };
      case "SuppimerEtudiant":
        return {
          ...state,
          etudiants: state.etudiants.filter((etu) => etu.id !== action.payload),
        };
      case "editEtudiant": {
        const nvNom = prompt("Saisir le nouveau nom", action.payload.nom);
        const nvPrenom = prompt("Saisir le nouveau prenom", action.payload.prenom);
        const nvAge = prompt("Saisir le nouveau age", action.payload.age);
        const nvFiliere = prompt("Saisir la nouvelle filière",action.payload.filiere);
        return state;
      }
      default:
        return state;
    }
  };
  const [state1, dispatch] = useReducer(reducer, initialiserState);
  return (
    <>
      <h1>Compteur : {state1.compteur}</h1>
      <h1>Nombre : {state1.nombre}</h1>
      <button onClick={() => dispatch({ type: "incrémenter", payload: 1 })}>
        Incrémenter
      </button>
      <button onClick={() => dispatch({ type: "Décrémenter", payload: 1 })}>
        Décrémenter
      </button>
      <button onClick={() => dispatch({ type: "init" })}>initialiser</button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Age</th>
            <th>Filière</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state1.etudiants.map((et) => (
            <tr key={et.id}>
              <td>{et.nom}</td>
              <td>{et.prenom}</td>
              <td>{et.age}</td>
              <td>{et.filiere}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch({ type: "SuppimerEtudiant", payload: et.id })
                  }
                >
                  Supprimer
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "editEtudiant", payload: et });
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
