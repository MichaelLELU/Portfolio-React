
import { Link } from 'react-router-dom';
import photo from '../../assets/MichaelLsansF.png'
import './homeStyle.scss'
import ListForm from '../../components/listForm/ListForm';
import StackList from '../../components/stacList/StackList';



export default function HomePage () {


    return (
        <main>
            <div className='presentation'>
            <img src={photo} alt="michael LELU" className='photo' />
                <div className='presentationText'>
                    <h1>Développeur Web </h1>
                    <p>Michaël LELU: sociable, dynamique, curieux, 
                    soif de connaissance et force de proposition.</p>
                    <Link to="/data/CVMichaelLELU.pdf" target='_blank' className='lienCV' download>Téléchargez mon CV</Link>
                </div>
            </div>
                <div className='buttons'>
                <p className='presentationText'> Du monde de la vision à celui de la création digitale, 
                    je mets à profit ma passion pour le détail et la précision pour 
                    concevoir des expériences web innovantes et accessibles à tous.</p>
                <Link to='/contact' className='buttonContact'>Contact</Link>
                </div>
                <StackList/>  
                <ListForm/>
        </main>
    )
}