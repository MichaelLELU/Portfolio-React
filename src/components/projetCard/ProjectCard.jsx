import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './cardStyle.scss'



export default function ProjectCard({projet}) {


    return (
        <div className='projetContainer'>
        <h2 className='titleCard'>{projet.nom}</h2>
        {projet.desc.split('//').map((ligne, i) => (<p key={i} className='descCard'>{ligne}<br/></p>))}
        {projet.logo === "" ? null : <Link target="_blank" to={projet.lienProd}><img src={projet.logo} alt={projet.logoAlt} className='image' /></Link>}
        <Link to={`/projects/${projet.id}`} className='button'>Info</Link>
        </div> 
    )
  }

ProjectCard.propTypes={
  projet: propTypes.shape({
    nom: propTypes.string.isRequired,
    logo: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    lienProd: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
  }.isRequired)}