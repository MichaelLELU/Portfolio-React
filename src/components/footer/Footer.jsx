import logoWild from '../../assets/logoWild.svg'
import logoGitHub from '../../assets/github-640.png'
import logoLinkedin from '../../assets/linkedin-logo-blanc.png'
import './footerStyle.scss'


export default function Footer() {
    return (
      <footer className='footer'>
        <ul className='footerList'>
          <li><a target="_blank" href="https://www.wildcodeschool.com/fr-fr/"><img src={logoWild} alt="wild code school logo link"  className='logoFooter'/></a></li>
          <li><a target="_blank" href="https://github.com/MichaelLELU"><img src={logoGitHub} alt="github logo" className='logoFooter'/></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/michael-lelu"><img src={logoLinkedin} alt="linkedin logo" className='logoFooter'/></a></li>
        </ul>
      </footer>
    )
  }