import { Link } from 'react-router-dom';
import {useState} from 'react';
import photo from '../../assets/MichaelL.jpg'
import formExp from '../../assets/data/formation-exp.json'
import './homeStyle.scss'
import Experience from '../../components/formExp/Experience';


export default function HomePage () {
    //state + fonction pour cacher/afficher les information dans les Formation avec le boutton 
    const [showDetailForm,setShowDetailForm] = useState(false);
    const handleToggleForm = () => setShowDetailForm(!showDetailForm);

    return (
        <main>
            <div className='presentation'>
            <img src={photo} alt="michael LELU red background" className='photo' />
                <div className='presentationText'>
                    <h1>Développeur Web </h1>
                    <p>Michaël LELU: social, dynamique, curieux, 
                    soif de connaissance et force de proposition.</p>
                </div>
            </div>
            <div className='articles'>
                <article className='formations'>
                    <span className='formationTitle'> <h2>Formations:</h2>
                    <button onClick={handleToggleForm} className='buttonMore'>+</button></span>
                    <ul>
                        {formExp.formation.map ((f)=> (
                        <li className='listForm' key={f.index}>
                            <h3>{f.ecole}</h3>
                        {showDetailForm && 
                            <div>
                                <h4>{f.titre}</h4>
                                <p>{f.date}</p>
                            </div>}
                        </li>
                        )) }
                    </ul>
                </article>
                <article className='experiences'>
                       <h2 className='experiencesTitle'>Expriences:</h2>
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