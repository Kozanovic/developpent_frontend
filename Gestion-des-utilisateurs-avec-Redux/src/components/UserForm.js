import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function UserForm() {
  const { nom, email, id_role, update, roles } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (nom !== "" && email !== "") {
      e.preventDefault();
      update ? dispatch({ type: "update" }) : dispatch({ type: "add" });
      navigate("/");
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{update ? "Modifier un utilisateur" : "Ajouter un utilisateur"}</h2>
      <label>Nom :</label>
      <input
        type="text"
        value={nom}
        onChange={(e) =>
          dispatch({
            type: "setter",
            payload: { champ: "nom", value: e.target.value },
          })
        }
      />
      <br />
      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) =>
          dispatch({
            type: "setter",
            payload: { champ: "email", value: e.target.value },
          })
        }
      />
      <br />
      <label>Role :</label>
      <select
        value={id_role}
        onChange={(e) =>
          dispatch({
            type: "setter",
            payload: { champ: "id_role", value: +e.target.value },
          })
        }
      >
        {roles.map((role) => (
          <option key={role.id_role} value={role.id_role}>
            {role.nom_role}
          </option>
        ))}
      </select>
      <br />
      <button>{update ? "Modifier" : "Ajouter"}</button>
    </form>
  );
}
