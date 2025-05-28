import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

const StudentContext = createContext();

const Initialisation = {
  students: [],
  filieres: [],
  nom: "",
  prenom: "",
  age: "",
  filiereId: 1,
  update: null,
};

const reset = {
  nom: "",
  prenom: "",
  age: "",
  filiereId: 1,
  update: null,
};

const ACTION = {
  SETTER: "setter",
  ADD: "ajouter",
  EDIT: "edit",
  UPDATE: "modifier",
  DELETE: "delete",
  SET_DATA: "setData"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.SETTER:
      return { ...state, [action.champ]: action.value };
    case ACTION.ADD:
      const nvId = state.students.length;
      const newStudent = {
        id: nvId + 1,
        nom: state.nom,
        prenom: state.prenom,
        age: +state.age,
        filiereId: state.filiereId,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        ...reset,
      };
    case ACTION.DELETE:
      return {
        ...state,
        students: state.students.filter((st) => st.id !== action.payload),
      };
    case ACTION.EDIT:
      return { ...state, ...action.payload, update: action.payload };
    case ACTION.UPDATE:
      return {
        ...state,
        students: state.students.map((st) =>
          st.id === state.update.id
            ? {
                ...st,
                nom: state.nom,
                prenom: state.prenom,
                age: state.age,
                filiereId: state.filiereId,
              }
            : st
        ),
        ...reset,
      };
    case ACTION.SET_DATA:
      return {
        ...state,
        students: action.payload.students,
        filieres: action.payload.filieres,
      };
    default:
      return state;
  }
}

function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, Initialisation);
  const [error, seterror] = useState(false);
  useEffect(() => {
    axios
      .get("/StudentData.json")
      .then((response) => {
        const { etudiants, filieres } = response.data;
        dispatch({
          type: ACTION.SET_DATA,
          payload: { students: etudiants, filieres: filieres },
        });
      })
      .catch((erreur) => {
        seterror(true);
        console.log(erreur);
      });
  }, []);

  return (
    <StudentContext.Provider
      value={{ state, dispatch, fil: state.filieres, ACTION, error }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
