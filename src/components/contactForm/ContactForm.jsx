
import { useForm, ValidationError } from '@formspree/react';
import './contactStyle.scss';
import { Link } from 'react-router-dom';

export default function ContactForm() {

  const [state, handleSubmit] = useForm("xvoejwad");


  if (state.succeeded) {

    const submittedText = `Merci, une réponse vous sera apportée à vôtre adresse Mail ! À bientôt!`;
    return (<div className='messageR'>
        <Link type="button" to={"/"} className="buttonR">Retour</Link>
        <p className='message'>{submittedText}</p>
    </div>
  )
}

  return (
    <>
      <form className="contactForm" onSubmit={handleSubmit} >
        <label htmlFor="name" className='formLabel'>Nom : </label>
        <input type="text" name="name" placeholder="Entrez votre nom" className='smallInput' required/>
        <ValidationError prefix="Name" field="name" errors={state.errors}/>
        <label htmlFor="email" className='formLabel'>Email : </label>
        <input type="email" name="email" placeholder="votre@mail.com" className='smallInput' required/>
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
        <label htmlFor="message" className='formLabel'>Message : </label>
        <textarea type="text" name="message" placeholder="Écrivez votre message..." className='largeInput' />
        <ValidationError prefix="Text" field="text" errors={state.errors}/>
        <input type="submit" value="Envoi" className='buttonEnvoi' disabled={state.submitting}/>
      </form>

    </>
  );
}