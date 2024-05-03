import { Link } from 'react-router-dom';
import './navBarStyle.scss';
import logo from '../../assets/ML_1_logoW.png'

export default function NavBar() {
  return (
    <nav className='navBar'>
      <Link to="/"><img src={logo} alt="logo M. L. with a Planets on grid" className='logo'/></Link>
      <ul className='navLink'>
        <li ><Link className='lien' to="/">Accueil</Link></li>
        <li ><Link className='lien' to="/projects">Projets</Link></li>
        <li ><Link className='lien' to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}



