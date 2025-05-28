import { useSelector } from "react-redux";
import style from "./listStagiaire.css";
import { useNavigate } from "react-router-dom";

const ListStagiaire = () => {
  const stagiaires = useSelector((state) => state.stagiaires);
  const navigate = useNavigate();
  return (
    <div className={style.list}>
      {stagiaires.map((s, index) => (
        <div key={index} onClick={navigate(`/${s.nom}`)}>
          <img src={s.image} />
          <p>
            {s.nom} {s.prenom}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListStagiaire;
