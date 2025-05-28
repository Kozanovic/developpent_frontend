import "./App.css";
import { CompteurProvider } from "./CompteurContext";
import Compteur from "./Compteur";

export default function App() {
  return (
    <>
      <CompteurProvider>
        <Compteur />
      </CompteurProvider>
    </>
  );
}
