import { useState } from "react";
import propTypes from 'prop-types';
import './expStyle.scss'

export default function Expercience ({exp}) {
//state + fonction pour cacher/afficher les information dans les Experciences avec le boutton 
    const [showDetail, setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);

    return  (
    <li className="list">
        <span className='title'><h3>{exp.poste}</h3>
        <button onClick={handleToggle} className='buttonMore'>{ showDetail? "-" : "+" } </button></span>
        {showDetail && 
            <div>
                <h4>{exp.entreprise}</h4>
                <p>{exp.periode}</p>
                <p> {exp.description}</p>
            </div>}
    </li>
    
    );
}

Expercience.propTypes ={
    exp: propTypes.shape({
        poste: propTypes.string.isRequired,
        entreprise: propTypes.string.isRequired,
        periode: propTypes.string.isRequired,
        description: propTypes.string.isRequired, 
    }.isRequired)}