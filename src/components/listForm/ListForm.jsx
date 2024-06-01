import { useState } from "react";
import Experience from '../../components/formExp/Experience';
import Formation from '../../components/formExp/Formation';
import formExp from '../../../public/data/formation-exp.json'
import './listStyle.scss'

export default function ListForm () {
    const [showDetailForm, setShowDetailForm] = useState(false);
    const handleToggleForm = () => setShowDetailForm(!showDetailForm);
    const [showDetailExp, setShowDetailExp] = useState(false);
    const handleToggleExp = () => setShowDetailExp(!showDetailExp);

    return (
        <div className='articles'>
            <h2 className="titleP">Mon parcours:</h2>
        <article className='boxFormExp'>
            <span className="more"><h2 className='titleH'>Formations:</h2>
            <button onClick={handleToggleForm} className='buttonMore'>{ showDetailForm? "-" : "+" } </button></span>
            {showDetailForm && <ul>
                {formExp.formation.map ((f)=> (
                    <Formation key={f.index} form={f}/>
                )) }
            </ul>}
        </article>
        <article className='boxFormExp'>
               <span className="more"><h2 className='titleH'>Expériences:</h2>
               <button onClick={handleToggleExp} className='buttonMore'>{ showDetailExp? "-" : "+" } </button></span>
               {showDetailExp && <ul> 
                    {formExp.experience.map((e) => (
                <Experience key={e.index} exp={e} handleToggleEx/>
               ))}
                </ul>}  
        </article>
        </div>
    )
}