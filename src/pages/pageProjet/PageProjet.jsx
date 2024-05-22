import { useParams, Link } from "react-router-dom";
import projects from '/public/data/projects.json';


export default function PageProjet () {
    const { id } = useParams();
    const projet = projects[id -1]

    const handleBack = () => {
        window.history.back();
      };

    return (
    <div>
    <button type="button" onClick={handleBack}>Return</button>
    <h1>{projet.nom}</h1>
    <p>{projet.type}</p>
    <img src={projet.image} alt={projet.alt} />
    <p>{projet.description === "" ? projet.desc : projet.description}</p>
    <Link to={projet.lienProd} target="_blank">SITE</Link>
    <Link to={projet.lienCode} target="_blank">repos Github</Link>
    <img src={projet.logo} alt={projet.logoAlt} />
    </div>
    )
}