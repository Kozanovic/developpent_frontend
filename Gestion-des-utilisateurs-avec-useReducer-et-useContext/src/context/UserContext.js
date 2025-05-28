import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const UserContext = createContext();
const Initialisation = {
  utilisateurs: [],
  roles: [],
  nom: "",
  email: "",
  id_role: 1,
  update: null,
};

const reset = {
  nom: "",
  email: "",
  id_role: 1,
  update: null,
};



function reducer(state, action) {
  switch (action.type) {
    case "setter":
      return { ...state, [action.champ]: action.value };
    case "add":
      const nvId = state.utilisateurs.length;
      const nvUtilisateur = {
        id: nvId,
        nom: state.nom,
        email: state.email,
        id_role: state.id_role,
      };
      return {
        ...state,
        utilisateurs: [...state.utilisateurs, nvUtilisateur],
        ...reset,
      };
    case "edit":
      return { ...state, ...action.payload, update: action.payload };
    case "update":
      return {
        ...state,
        utilisateurs: state.utilisateurs.map((ut) =>
          ut.id === state.update.id
            ? {
                ...ut,
                nom: state.nom,
                email: state.email,
                id_role: state.id_role,
              }
            : ut
        ),
        ...reset,
      };
    case "delete":
      return {
        ...state,
        utilisateurs: state.utilisateurs.filter(
          (ut) => ut.id !== action.payload
        ),
      };
    case "setData":
      return {
        ...state,
        utilisateurs: action.payload.utilisateurs,
        roles: action.payload.roles,
      };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, Initialisation);
  useEffect(() => {
    axios.get("/userData.json").then((response) => {
      const { utilisateurs, roles } = response.data;
      dispatch({
        type: "setData",
        payload: { utilisateurs: utilisateurs, roles: roles },
      });
    });
  }, []);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch, rol: state.roles }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export { UserContext, UserProvider };
