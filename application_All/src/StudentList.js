export default function StudentList({
  student,
  setStudent,
  setNom,
  setPrenom,
  setAge,
  setFiliere,
  setUpdate,
}) {
  const handleDelete = (sup) => {
    setStudent(student.filter((st) => st.id !== sup));
  };
  const handleUpdate = (stu) => {
    setUpdate(stu);
    setNom(stu.nom);
    setPrenom(stu.prenom);
    setAge(stu.age);
    setFiliere(stu.filiere);
  };
  return (
    <div>
      {student.length !== 0 && (
        <>
          <table border={1}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Age</th>
                <th>Filière</th>
                <th>Action</th>
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
                    <button
                      className="modifier"
                      onClick={() => handleUpdate(st)}
                    >
                      Modifier
                    </button>
                    <button
                      className="supprimer"
                      onClick={() => handleDelete(st.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
