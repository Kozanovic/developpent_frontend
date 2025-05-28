import "./student.css";
import { StudentProvider } from "./StudentContext";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

export default function App() {
  return (
    <div className="container">
      <StudentProvider>
        <AddStudent />
        <StudentList />
      </StudentProvider>
    </div>
  );
}
