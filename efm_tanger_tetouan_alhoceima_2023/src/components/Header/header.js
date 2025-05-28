import { Link } from "react-router-dom";
import style from "./header.css";

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/">Accueil</Link>
      <Link to="/add">Ajouter un stagiaire</Link>
    </div>
  );
};

export default Header;
