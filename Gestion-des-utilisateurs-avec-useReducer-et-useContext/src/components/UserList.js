import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserList() {
  const { state, dispatch, rol } = useContext(UserContext);
  const { utilisateurs } = state;

  const FindRole = (roleId) => {
    const role = rol.find((r) => r.id_role === +roleId);
    return role ? role.nom_role : "Not Found";
  };

  return (
    <>
      {utilisateurs.length !== 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((ut) => (
              <tr key={ut.id}>
                <td>{ut.nom}</td>
                <td>{ut.email}</td>
                <td>{FindRole(ut.id_role)}</td>
                <td>
                  <button
                    onClick={() => dispatch({ type: "edit", payload: ut })}
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: ut.id })
                    }
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
