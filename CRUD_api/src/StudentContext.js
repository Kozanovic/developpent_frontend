import { createContext, useState } from "react";
import StudentData from "./StudentData.json";
import Filiere from "./Filiere.json";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const data = StudentData;
  const fil = Filiere
  const [student, setStudent] = useState(data);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [filiere, setFiliere] = useState("");
  const [update, setUpdate] = useState();

  const AjouterEtudiant = () => {
    const nvId = student.length;
    if (nom !== "" && prenom !== "" && age !== "" && filiere !== "") {
      const nvEtudiant = {
        id: nvId + 1,
        nom: nom,
        prenom: prenom,
        age: +age,
        filiere: filiere,
      };
      setStudent([...student, nvEtudiant]);
      reset();
      alert("le stagiaire a été ajoutée avec succée ✔");
    }
  };
  const updateStudent = () => {
    if (nom !== "" && prenom !== "" && age !== "" && filiere !== "") {
      setStudent(
        student.map((st) =>
          st.id === update.id
            ? {
                ...st,
                nom: nom,
                prenom: prenom,
                age: +age,
                filiere: filiere,
              }
            : st
        )
      );
      setUpdate();
      reset();
      alert("le stagiaire a été modifiée avec succée ✔");
    }
  };
  const deleteStudent = (sup) => {
    if (
      window.confirm(
        `voulez vous supprimer le stagiaire ${sup.nom} ${sup.prenom} ❓`
      )
    ) {
      setStudent(student.filter((st) => st.id !== sup.id));
      alert(`le stagiaire ${sup.nom} ${sup.prenom} a été supprimée ✔`);
    } else {
      alert(`tu n as pas supprimer le stagiaire ${sup.nom} ${sup.prenom} ❌`);
    }
  };
  const handleUpdate = (etudiant) => {
    setUpdate(etudiant);
    setNom(etudiant.nom);
    setPrenom(etudiant.prenom);
    setAge(etudiant.age);
    setFiliere(etudiant.filiere);
  };
  const reset = () => {
    setNom("");
    setPrenom("");
    setAge("");
    setFiliere("");
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        AjouterEtudiant,
        updateStudent,
        deleteStudent,
        handleUpdate,
        nom,
        setNom,
        prenom,
        setPrenom,
        age,
        setAge,
        filiere,
        setFiliere,
        update,
        fil,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
