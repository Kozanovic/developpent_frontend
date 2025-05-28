import { createContext, useState } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [student, setStudent] = useState([]);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const AjouterEtudiant = () => {
    const nvId = student.length;
    if (nom !== "" && email !== "") {
      const nvEtudiant = {
        id: nvId + 1,
        nom: nom,
        email: email,
      };
      setStudent([...student, nvEtudiant]);
      setNom("");
      setEmail("");
    }
  };
  const deleteStudent = (sup) => {
    if(window.confirm('voulez vous supprimer le stagiaires ?')){
      setStudent(student.filter((st) => st.id !== sup));
    }
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        AjouterEtudiant,
        deleteStudent,
        nom,
        setNom,
        email,
        setEmail,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
