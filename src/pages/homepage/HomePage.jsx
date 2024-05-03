import { Link } from 'react-router-dom';
import {useState} from 'react';
import photo from '../../assets/MichaelL.jpg'
import './homeStyle.scss'


export default function HomePage () {
    //state + fonction pour cacher/afficher les information dans les Formation avec le boutton 
    const [showDetailForm,setShowDetailForm] = useState(false);
    const handleToggleForm = () => setShowDetailForm(!showDetailForm);
    //state + fonction pour cacher/afficher les information dans les Experciences avec le boutton 
    const [showDetailEx, setShowDetailEx] = useState(false);
    const handleToggleEx = () => setShowDetailEx(!showDetailEx);

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
                    <li>
                        <h3>WILD CODE SCHOOL</h3>
                            {showDetailForm && 
                            <div>
                            <h4>BootCamp: Développeur Web et Web Mobile (équivalent bac+2) </h4>
                            <p>02/2024 - 07/2024</p>
                            </div>}
                    </li>
                    <li>
                        <h3>Lycée Professionnel Jean Perrin</h3>
                            {showDetailForm && 
                            <div>
                            <h4>Bac Professionnel Optique Lunetterie (mention bien)</h4>
                            <p>09/2010 - 06/2012</p>
                            <h4>BEP Optique Lunetterie</h4>
                            <p>09/2008 - 06/2010</p>
                            </div>}
                    </li>
                </ul>
            </article>
            <article className='experiences'>
                        <span className='formationTitle'> <h2>Expriences:</h2>
                        <button onClick={handleToggleEx} className='buttonMore'>+</button></span>
                            <ul>
                                <li>
                                <h3>Monteur Vendeur/Adjoint</h3>
                                {showDetailEx && 
                                <div>
                                    <h4>krys - Ablis</h4>
                                    <p>Décembre.2022- juillet.2023</p>
                                    <p> Gestion administratives, Comptabilité , aide au développement du groupe,
                                         conseils et suivi clients, commandes, réparations et montages.</p>
                                </div>
                                }
                                </li>
                                <li>
                                <h3>Monteur Vendeur Formateur</h3>
                                {showDetailEx && 
                                <div>
                                    <h4>Optical Center - Versailles - Plaisir</h4>
                                    <p>Septembre.2020- Décembre.2022</p>
                                    <p>Force de vente, conseils et suivi clients, commandes, mise en valeur du magasin,
                                         montages, gestion mutuelles et chiffres.</p>
                                </div>
                                }
                                </li>
                                <li>
                                <h3>Commercial B2B</h3>
                                {showDetailEx && 
                                <div>
                                    <h4>docexpert concessionnaire XEROX - Meudon</h4>
                                    <p>Janvier.2020 - Août.2020</p>
                                    <p>Prospection, Suivi client, Financement.</p>
                                </div>
                                }
                                </li>
                                <li>
                                <h3>Monteur/Vendeur/Adjoint</h3>
                                {showDetailEx && 
                                <div>
                                    <h4>Alain Afflelou – Plaisirs/Montigny le Bretonneux </h4>
                                    <p>Janvier.2020 - Août.2020</p>
                                    <p>Force de vente, conseils et suivi clients, commandes,
                                     gestion mutuelles et chiffres, mise en valeur du magasin, 
                                    montages, tâches administratives et litiges clients.</p>
                                </div>
                                }
                                </li>
                                <li>
                                <h3>Equipier polyvalent/Formateur</h3>
                                {showDetailEx && 
                                <div>
                                    <h4>McDonald’s – Guyancourt</h4>
                                    <p>Avril.2014 - Mai.2016</p>
                                </div>
                                }
                                </li>
                            </ul>
            </article>
            <Link to='/contact' className='buttonContact'>CONTACT</Link>
            </div>
        </main>
    )
}