import { createStore } from "redux";
import axios from "axios";

const initialisation = {
  utilisateurs: [],
  roles: [],
  nom: "",
  email: "",
  id_role: 1,
  update: null,
  filterRole: "",
  utilisateursFilter: [],
};

// const reset = {
//   nom: "",
//   email: "",
//   id_role: 1,
//   update: null,
// };

const reducer = (state = initialisation, action) => {
  switch (action.type) {
    case "setter":
      return { ...state, [action.payload.champ]: action.payload.value };
    case "add":
      const nvId = state.utilisateurs.length + 1;
      const nvUtilisateurs = {
        id: nvId,
        nom: state.nom,
        email: state.email,
        id_role: state.id_role,
      };
      return {
        ...state,
        utilisateurs: [...state.utilisateurs, nvUtilisateurs],
        // ...reset,
      };
    case "edit":
      return {
        ...state,
        nom: action.payload.nom,
        email: action.payload.email,
        id_role: action.payload.id_role,
        update: action.payload,
      };
    case "update":
      return {
        ...state,
        utilisateurs: state.utilisateurs.map((user) =>
          user.id === state.update.id
            ? {
                ...user,
                nom: state.nom,
                email: state.email,
                id_role: state.id_role,
              }
            : user
        ),
        // ...reset,
      };
    case "delete":
      return {
        ...state,
        utilisateurs: state.utilisateurs.filter(
          (user) => user.id !== action.payload
        ),
      };
    case "setData":
      return {
        ...state,
        utilisateurs: action.payload.utilisateurs,
        utilisateursFilter: action.payload.utilisateurs,
        roles: action.payload.roles,
      };
    case "filter":
      return {
        ...state,
        utilisateursFilter: action.payload
          ? state.utilisateurs.filter(
              (user) => user.id_role === +action.payload
            )
          : state.utilisateurs,
        filterRole: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

axios.get("/userData.json").then((response) => {
  const { utilisateurs, roles } = response.data;
  store.dispatch({
    type: "setData",
    payload: {
      utilisateurs: utilisateurs,
      roles: roles,
      utilisateursFilter: utilisateurs,
    },
  });
});

export default store;
