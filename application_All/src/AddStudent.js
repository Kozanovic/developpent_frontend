export default function AddStudent({
  student,
  setStudent,
  nom,
  setNom,
  prenom,
  setPrenom,
  age,
  setAge,
  filiere,
  setFiliere,
  update,
  setUpdate,
}) {
  const AjouterEtudiant = (e) => {
    e.preventDefault();
    const nvId = student.length;
    if (nom !== "" && prenom !== "" && age !== "" && filiere !== "") {
      if (!update) {
        const nvEtudiant = {
          id: nvId + 1,
          nom: nom,
          prenom: prenom,
          age: +age,
          filiere: filiere,
        };
        setStudent([...student, nvEtudiant]);
      } else {
        setStudent(
          student.map((st) => {
            return st.id === update.id
              ? {
                  ...st,
                  nom: nom,
                  prenom: prenom,
                  age: age,
                  filiere: filiere,
                }
              : st;
          })
        );
        setUpdate();
      }
      setNom("");
      setPrenom("");
      setAge("");
      setFiliere("");
    }
  };
  const handleChangeNom = (e) => {
    setNom(e.target.value);
  };
  const handleChangePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangeFiliere = (e) => {
    setFiliere(e.target.value);
  };
  return (
    <div>
      <form onSubmit={(e) => AjouterEtudiant(e)}>
        <h1>{update ? "Modifier un étudiant" : "Ajouter un étudiant"}</h1>
        <label>Nom : </label>
        <input type="text" value={nom} onChange={(e) => handleChangeNom(e)} />
        <label>Prénom : </label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => handleChangePrenom(e)}
        />
        <label>Age : </label>
        <input type="number" value={age} onChange={(e) => handleChangeAge(e)} />
        <label>Filière : </label>
        <input
          type="text"
          value={filiere}
          onChange={(e) => handleChangeFiliere(e)}
        />
        <button className="ajouter">{update ? "Modifier" : "Ajouter"}</button>
      </form>
    </div>
  );
}
// Contexte API
// Reducer
// Redux
// React Query
