import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailStagiaire = () => {
  const { nom } = useParams();
  const stagiaire = useSelector((state) =>
    state.stagiaires.find((s) => s.nom === nom)
  );
  return (
    <div>
      <img src={stagiaire.image} />
      <h3>
        {stagiaire.nom} {stagiaire.prenom}
      </h3>
      <p>{stagiaire.filiere}</p>
    </div>
  );
};

export default DetailStagiaire;
