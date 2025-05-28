import style from "./stagiaire.css";

const Stagiaire = ({ image, nom, prenom, filiere }) => {
  return (
    <div className={style.stagiaire}>
      <img src={image} />
      <p>
        {nom} {prenom}
      </p>
      <p>{filiere}</p>
    </div>
  );
};

export default Stagiaire;
