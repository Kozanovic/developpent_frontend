import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function UserList() {
  const { utilisateurs, roles, filterRole, utilisateursFilter } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const findRoleName = (id) => {
    const role = roles.find((role) => role.id_role === id);
    return role ? role.nom_role : "Not Found";
  };

  const liste = filterRole ? utilisateursFilter : utilisateurs;

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <Link to="/user-form">
          <button>Ajouter un utilisateur</button>
        </Link>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <label>Filtrer par role :</label>
        <select
          value={filterRole}
          onChange={(e) =>
            dispatch({ type: "filter", payload: e.target.value })
          }
        >
          <option value="">...</option>
          {roles.map((role) => (
            <option key={role.id_role} value={role.id_role}>
              {role.nom_role}
            </option>
          ))}
        </select>
      </div>

      {liste.length > 0 && (
        <>
          <table border="1" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {liste.map((user) => (
                <tr key={user.id}>
                  <td>{user.nom}</td>
                  <td>{user.email}</td>
                  <td>{findRoleName(user.id_role)}</td>
                  <td>
                    <Link to={`/user-form/${user.id}`}>
                      <button
                        onClick={() =>
                          dispatch({ type: "edit", payload: user })
                        }
                      >
                        Modifier
                      </button>
                    </Link>
                    <button
                      onClick={() =>
                        dispatch({ type: "delete", payload: user.id })
                      }
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
