import './App.css';
import { CompteurProvider } from "./CompteurContext";
import Compteur from "./Compteur";
import CompteurIncrement from './CompteurIncr';
import CompteurDecrement from './CompteurDecr';

export default function App() {
  return (
    <>
     <h1>Context API Compteur</h1>
     <CompteurProvider >
      <CompteurIncrement/>
      <Compteur/>
      <CompteurDecrement/>
     </CompteurProvider>
    </>
  );
}