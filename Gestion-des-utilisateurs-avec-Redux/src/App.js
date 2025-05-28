import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <h1>Gestion des utilisateurs</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user-form/:id" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}
