import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function AddStudent() {
  const {
    nom,
    setNom,
    prenom,
    setPrenom,
    age,
    setAge,
    filiere,
    setFiliere,
    AjouterEtudiant,
    updateStudent,
    update,
    fil,
  } = useContext(StudentContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    update ? updateStudent() : AjouterEtudiant();
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
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>{update ? "Modifier un étudiant" : "Ajouter un étudiant"}</h2>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => handleChangeNom(e)} />
        <label>Prénom :</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => handleChangePrenom(e)}
        />
        <label>Age :</label>
        <input type="number" value={age} onChange={(e) => handleChangeAge(e)} />
        <label>Filière :</label>
        <select value={filiere} onChange={(e) => handleChangeFiliere(e)}>
          {fil.map(f =>(
            <option>{f}</option>
          ))}
        </select>
        <button className="ajouter">{update ? "Modifier" : "Ajouter"}</button>
      </form>
    </>
  );
}
