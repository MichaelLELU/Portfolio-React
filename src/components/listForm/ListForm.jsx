import Experience from '../../components/formExp/Experience';
import Formation from '../../components/formExp/Formation';
import formExp from '../../../public/data/formation-exp.json'
import './listStyle.scss'

export default function ListForm () {

    return (
        <div className='articles'>
        <article className='boxFormExp'>
            <h2 className='titleH'>Formations:</h2>
            <ul>
                {formExp.formation.map ((f)=> (
                    <Formation key={f.index} form={f}/>
                )) }
            </ul>
        </article>
        <article className='boxFormExp'>
               <h2 className='titleH'>Expériences:</h2>
                <ul> {formExp.experience.map((e) => (
                <Experience key={e.index} exp={e} handleToggleEx/>
               ))}
                </ul>
        </article>
        </div>
    )
}