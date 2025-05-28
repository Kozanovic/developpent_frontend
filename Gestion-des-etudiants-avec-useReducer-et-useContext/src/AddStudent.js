import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function AddStudent() {
  const { state, dispatch, fil, ACTION, error } = useContext(StudentContext);
  const { nom, prenom, age, filiereId, update } = state;

  const CHAMPS = {
    nom: "nom",
    prenom: "prenom",
    age: "age",
    filiereId: "filiereId",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom !== "" && prenom !== "" && age !== "") {
      if (update) {
        dispatch({ type: ACTION.UPDATE });
      } else {
        dispatch({ type: ACTION.ADD });
      }
    }
  };

  return (
    <>
      {!error && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>{update ? "Modifier un étudiant" : "Ajouter un étudiant"}</h2>
          <label>Nom :</label>
          <input
            type="text"
            value={nom}
            onChange={(e) =>
              dispatch({
                type: ACTION.SETTER,
                champ: CHAMPS.nom,
                value: e.target.value,
              })
            }
          />
          <label>Prénom :</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) =>
              dispatch({
                type: ACTION.SETTER,
                champ: CHAMPS.prenom,
                value: e.target.value,
              })
            }
          />
          <label>Âge :</label>
          <input
            type="number"
            value={age}
            onChange={(e) =>
              dispatch({
                type: ACTION.SETTER,
                champ: CHAMPS.age,
                value: e.target.value,
              })
            }
          />
          <label>Filière :</label>
          <select
            value={filiereId}
            onChange={(e) =>
              dispatch({
                type: ACTION.SETTER,
                champ: CHAMPS.filiereId,
                value: +e.target.value,
              })
            }
          >
            {fil.map((f) => (
              <option key={f} value={f.id}>
                {f.nom}
              </option>
            ))}
          </select>
          <button className="ajouter">{update ? "Modifier" : "Ajouter"}</button>
        </form>
      )}
    </>
  );
}
