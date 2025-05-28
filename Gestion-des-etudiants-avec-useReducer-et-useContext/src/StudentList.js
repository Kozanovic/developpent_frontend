import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentList() {
  const { state, dispatch, ACTION, fil, error } = useContext(StudentContext);
  const { students } = state;

  const FindId = (filiereId) => {
    const filiere = fil.find((f) => f.id === +filiereId);
    return filiere ? filiere.nom : "Not found";
  };

  return (
    <>
      {students.length > 0 && !error && (
        <table border="1">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Âge</th>
              <th>Filière</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((st) => (
              <tr key={st.id}>
                <td>{st.nom}</td>
                <td>{st.prenom}</td>
                <td>{st.age}</td>
                <td>{FindId(st.filiereId)}</td>
                <td>
                  <button
                    className="modifier"
                    onClick={() => dispatch({ type: ACTION.EDIT, payload: st })}
                  >
                    Modifier
                  </button>
                  <button
                    className="supprimer"
                    onClick={() => {
                      if (
                        window.confirm(
                          `voullez-vous supprimer le stagiaire ${st.nom} ${st.prenom}`
                        )
                      ) {
                        dispatch({ type: ACTION.DELETE, payload: st.id });
                      }
                    }}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && (
        <body
          style={{
            fontFamily: "Arial, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgrounColor: "#f5f5f5",
          }}
        > 
          <h1>Not Found</h1>
        </body>
      )}
    </>
  );
}
