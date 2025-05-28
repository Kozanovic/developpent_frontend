import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentList() {
  const { student, deleteStudent } = useContext(StudentContext);

  return (
    <>
      {student.length > 0 && (
        <>
          <table border="1">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {student.map((st) => (
                <tr key={st.id}>
                  <td>{st.nom}</td>
                  <td>{st.email}</td>
                  <td>
                    <button className="supprimer" onClick={() => deleteStudent(st.id)}>
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
