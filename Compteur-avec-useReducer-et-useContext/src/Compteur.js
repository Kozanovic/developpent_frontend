import { useContext } from "react";
import { CompteurContext } from "./CompteurContext";

export default function Compteur() {
  const { state1, dispatch } = useContext(CompteurContext);

  return (
    <>
      <h1>Compteur : {state1.compteur}</h1>
      <button onClick={() => dispatch({ type: "incrémenter", payload: 1 })}>
        Incrémenter
      </button>
      <button onClick={() => dispatch({ type: "Décrémenter", payload: 1 })}>
        Décrémenter
      </button>
      <button onClick={() => dispatch({ type: "init" })}>Initialiser</button>
    </>
  );
}
