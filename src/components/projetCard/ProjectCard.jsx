import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import './cardStyle.scss'



export default function ProjectCard({projet}) {
    return (

        <div className='projetContainer'>
        <h2 className='titleCard'>{projet.nom}</h2>
        <p className='descCard'>{projet.desc}</p>
        <img src={projet.image} alt={projet.alt} className='image' />
        <a href={projet.lienProd} className='lienCard'>{projet.lienProd}</a>
        <Link className='button'>+ INFO</Link>
        </div>
    )
  }

ProjectCard.propTypes={
  projet: propTypes.shape({
    nom: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    lienProd: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
  }.isRequired)}