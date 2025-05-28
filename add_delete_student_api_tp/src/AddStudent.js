import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function AddStudent() {
  const { nom, setNom, email, setEmail, AjouterEtudiant } =
    useContext(StudentContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    AjouterEtudiant();
  };
  const handleChangeNom = (e) => {
    setNom(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Ajouter un étudiant</h2>
        <label>Nom :</label>
        <input type="text" value={nom} onChange={(e) => handleChangeNom(e)} />
        <label>Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChangeEmail(e)}
        />
        <button className="ajouter">Ajouter</button>
      </form>
    </>
  );
}
