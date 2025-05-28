import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";
export default function ArticleForm() {
  const { state, dispatch, cat } = useContext(ArticleContext);
  const { libelle, prix_unitaire, id_categorie, update } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (libelle !== "" && prix_unitaire !== "" && id_categorie !== "") {
      if (update) {
        dispatch({ type: "update" });
      } else {
        dispatch({ type: "add" });
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>{update ? "Modifier un article" : "Ajouter un article"}</h3>
        <label>Libellé</label>
        <input
          type="text"
          value={libelle}
          onChange={(e) => {
            dispatch({
              type: "setter",
              champ: "libelle",
              value: e.target.value,
            });
          }}
        />
        <label>Prix Unitaire</label>
        <input
          type="number"
          value={prix_unitaire}
          onChange={(e) => {
            dispatch({
              type: "setter",
              champ: "prix_unitaire",
              value: +e.target.value,
            });
          }}
        />
        <label>Catégorie</label>
        <select
          value={id_categorie}
          onChange={(e) =>
            dispatch({
              type: "setter",
              champ: "id_categorie",
              value: +e.target.value,
            })
          }
        >
          {cat.map((c) => (
            <option key={c.id_categorie} value={c.id_categorie}>
              {c.nom_categorie}
            </option>
          ))}
        </select>
        <button>{update ? "Modifier" : "Ajouter"}</button>
      </form>
    </>
  );
}
