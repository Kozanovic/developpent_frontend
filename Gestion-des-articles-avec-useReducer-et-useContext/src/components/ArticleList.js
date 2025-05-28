import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export default function ArticleList() {
  const { state, dispatch, cat } = useContext(ArticleContext);
  const { articles } = state;

  const FindCategorieNom = (categorieId) => {
    const categorie = cat.find((c) => c.id_categorie === +categorieId);
    return categorie ? categorie.nom_categorie : "Not Found";
  };

  return (
    <>
      {articles.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>Libellé</th>
              <th>Prix Unitaire</th>
              <th>Catégorie</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((ar) => (
              <tr key={ar.id}>
                <td>{ar.libelle}</td>
                <td>{ar.prix_unitaire}</td>
                <td>{FindCategorieNom(ar.id_categorie)}</td>
                <td>
                  <button
                    onClick={() => dispatch({ type: "edit", payload: ar })}
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => dispatch({ type: "delete", payload: ar.id })}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
