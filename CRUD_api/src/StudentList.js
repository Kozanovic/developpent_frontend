import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentList() {
  const { student, deleteStudent, handleUpdate } = useContext(StudentContext);

  return (
    <>
      {student.length > 0 && (
        <>
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
              {student.map((st) => (
                <tr key={st.id}>
                  <td>{st.nom}</td>
                  <td>{st.prenom}</td>
                  <td>{st.age}</td>
                  <td>{st.filiere}</td>
                  <td>
                    <button className="modifier" onClick={() => handleUpdate(st)}>Modifier</button>
                    <button className="supprimer" onClick={() => deleteStudent(st)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
