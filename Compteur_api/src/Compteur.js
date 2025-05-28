import { useContext } from "react";
import { CompteurContext } from "./CompteurContext";
export default function Compteur() {
  const { compteur } = useContext(CompteurContext);
  return (
    <>
      <h1>{compteur}</h1>
    </>
  );
}
