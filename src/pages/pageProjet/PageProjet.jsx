import { useParams, Link } from "react-router-dom";
import projects from '/public/data/projects.json';
import './ProjetStyle.scss'


export default function PageProjet () {
    const { id } = useParams();
    const projet = projects[id -1]

    const handleBack = () => {
        window.history.back();
      };

    return (
    <>
    <button type="button" onClick={handleBack} className="buttonR">Retour</button>
    <div className="containerTop">
    <h1 id="titreP">{projet.nom} {projet.logo === "" ? null : <img src={projet.logo} alt={projet.logoAlt} id="logo" />}</h1>
    <p>Contexte: {projet.type}</p>

    <img src={projet.image} alt={projet.alt} className="imageP" />
    </div>
    <div className="containerBottom">

  {projet.technos === "" ? null : <p>Technos: {projet.technos}</p> }
    <p className="descP">{projet.description === "" ? projet.desc : projet.description}</p>
    </div><div className="containLink">
  {projet.lienProd === "" ? null : <Link to={projet.lienProd} target="_blank" className="lienCard">Site</Link>}
    {projet.lienCode === "" ? null : <Link to={projet.lienCode} target="_blank" className="lienCard">Github</Link>}
    </div>
    </>
    )
}