import "./student.css";
import StudentData from "./StudentData.json";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import { useState } from "react";
export default function App() {
  const data = StudentData;
  const [student, setStudent] = useState(data);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState();
  const [filiere, setFiliere] = useState("");
  const [update, setUpdate] = useState();
  return (
    <div className="container">
      <AddStudent
        student={student}
        setStudent={setStudent}
        nom={nom}
        setNom={setNom}
        prenom={prenom}
        setPrenom={setPrenom}
        age={age}
        setAge={setAge}
        filiere={filiere}
        setFiliere={setFiliere}
        update={update}
        setUpdate={setUpdate}
      />
      <StudentList
        student={student}
        setStudent={setStudent}
        setNom={setNom}
        setPrenom={setPrenom}
        setAge={setAge}
        setFiliere={setFiliere}
        setUpdate={setUpdate}
      />
    </div>
  );
}
