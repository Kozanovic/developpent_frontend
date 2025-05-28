import { createContext, useState } from "react";
const CompteurContext = createContext();
function CompteurProvider({ children }) {
  const [compteur, setCompteur] = useState(0);
  const compteurIncr = () => {
    setCompteur(compteur + 1);
  };
  const compteurDecr = () => {
    setCompteur(compteur - 1);
  };
  return (
    <CompteurContext.Provider value={{ compteur, compteurIncr, compteurDecr }}>
      {children}
    </CompteurContext.Provider>
  );
}
export { CompteurContext, CompteurProvider };