import "./App.css";
import { UserProvider } from "./context/UserContext";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  return(<>
    <UserProvider>
      <UserForm/>
      <UserList/>
    </UserProvider>
  </>);
}
