import { createContext, useReducer } from "react";
const CompteurContext = createContext();
function CompteurProvider({ children }) {
  const Initialisation = { compteur: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "incrémenter":
        return { ...state, compteur: state.compteur + action.payload };
      case "Décrémenter":
        return { ...state, compteur: state.compteur - action.payload };
      case "init":
        return { ...state, compteur: 0 };
      default:
        return state;
    }
  };
  const [state1, dispatch] = useReducer(reducer, Initialisation);
  return (
    <CompteurContext.Provider value={{ state1, dispatch }}>
      {children}
    </CompteurContext.Provider>
  );
}
export { CompteurContext, CompteurProvider };
