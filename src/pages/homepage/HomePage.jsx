import { Link } from 'react-router-dom';
import photo from '../../assets/MichaelL.jpg'
import formExp from '../../../public/data/formation-exp.json'
import './homeStyle.scss'
import Experience from '../../components/formExp/Experience';
import Formation from '../../components/formExp/Formation';


export default function HomePage () {

    const handleDownloadClick = () => {
        window.open("/public/data/CVMichaelLELU.pdf", "_blank");
      };
      console.log(handleDownloadClick)

    return (
        <main>
            <div className='presentation'>
            <img src={photo} alt="michael LELU red background" className='photo' />
                <div className='presentationText'>
                    <h1>Développeur Web </h1>
                    <p>Michaël LELU: sociable, dynamique, curieux, 
                    soif de connaissance et force de proposition. <br />
                    Du monde de la vision à celui de la création digitale, 
                    je mets à profit ma passion pour le détail et la précision pour 
                    concevoir des expériences web innovantes et accessibles à tous.</p>
                    <button className='lienCV'><a className='linkCV' href="/public/data/CVMichaelLELU.pdf" target='_blank'rel='noopener noreferrer'>Téléchargez mon CV</a></button>
                </div>
            </div>
            <div className='articles'>
                <article className='formations'>
                    <h2 className='titleH'>Formations:</h2>
                    <ul>
                        {formExp.formation.map ((f)=> (
                            <Formation key={f.index} form={f}/>
                        )) }
                    </ul>
                </article>
                <article className='experiences'>
                       <h2 className='titleH'>Expériences:</h2>
                        <ul> {formExp.experience.map((e) => (
                        <Experience key={e.index} exp={e} handleToggleEx/>
                       ))}
                        </ul>
                </article>
                <Link to='/contact' className='buttonContact'>CONTACT</Link>
            </div>
        </main>
    )
}