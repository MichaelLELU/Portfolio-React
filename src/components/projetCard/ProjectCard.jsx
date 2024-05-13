import { Link } from 'react-router-dom';
import { useState } from "react";
import propTypes from 'prop-types';
import './cardStyle.scss'



export default function ProjectCard({projet}) {
  const [showDetail, setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

    return (
      

        <div className='projetContainer'>
{/*           <Link to={`/projects/${projet.id}`}>page</Link> */}
        <h2 className='titleCard'>{projet.nom}</h2>
        {projet.desc.split('//').map((ligne, i) => (<p key={i} className='descCard'>{ligne}<br/></p>))}
        {projet.lienProd !== "" && (
        <Link target="_blank" to={projet.lienProd} className='lienCard'>Le Site</Link>)}
        <Link target="_blank" to={projet.lienProd}><img src={projet.logo} alt={projet.logoAlt} className='image' /></Link>
        {projet.description !== "" && (
        <button onClick={handleToggle} className='button'>{showDetail? "-" : "+"} INFO</button>)}
        {showDetail && 
            <div className='info'>
                <img src={projet.image} alt={projet.alt} className='imageInfo'/>
                <p className='texte'> {projet.description}</p>
                {projet.lienCode !== "" && (
                <Link to={projet.lienCode} target="_blank" className='lienCard'>Le Code</Link>)}
            </div>}
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