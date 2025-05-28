import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddStagiaire = () => {
  const { nom, prenom, image, filiere } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom !== "" && prenom !== "" && image !== "" && filiere !== "") {
      dispatch({ type: "add_stagiaire" });
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Ajouter un stagiaire</h1>
        <label>Image :</label>
        <input
          type="text"
          value={image}
          onChange={(e) =>
            dispatch({
              type: "setter",
              payload: { champ: "image", value: e.target.value },
            })
          }
        />
        <br />
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
        <label>Prenom :</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) =>
            dispatch({
              type: "setter",
              payload: { champ: "prenom", value: e.target.value },
            })
          }
        />
        <br />
        <label>Filiere :</label>
        <input
          type="text"
          value={filiere}
          onChange={(e) =>
            dispatch({
              type: "setter",
              payload: { champ: "filiere", value: e.target.value },
            })
          }
        />
        <br />
        <button>Ajouter</button>
      </form>
    </>
  );
};

export default AddStagiaire;
