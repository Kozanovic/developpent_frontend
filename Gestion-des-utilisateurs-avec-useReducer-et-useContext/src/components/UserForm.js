import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export default function UserForm() {
  const { state, dispatch, rol } = useContext(UserContext);
  const { nom, email, id_role, update } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    return update ? dispatch({ type: "update" }) : dispatch({ type: "add" });
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ border: "1px solid black",borderRadius:"8px", maxWidth:"70%", padding: "20px", margin: "10px" }}
      >
        <h2>{update ? "Modifier un utilisateur" : "Ajouter un utilisateur"}</h2>
        <label>Nom : </label>
        <input
          type="text"
          value={nom}
          onChange={(e) => {
            dispatch({
              type: "setter",
              champ: "nom",
              value: e.target.value,
            });
          }}
        />
        <br />
        <label>Email : </label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            dispatch({
              type: "setter",
              champ: "email",
              value: e.target.value,
            });
          }}
        />
        <br />
        <label>Roles :</label>
        <select
          value={id_role}
          onChange={(e) =>
            dispatch({
              type: "setter",
              champ: "id_role",
              value: +e.target.value,
            })
          }
        >
          {rol.map((r) => (
            <option key={r.id_role} value={r.id_role}>
              {r.nom_role}
            </option>
          ))}
        </select>
        <br />
        <button>{update ? "Modifier" : "Ajouter"}</button>
      </form>
    </>
  );
}
