import { useState } from 'react';
import './contactStyle.scss';

export default function ContactForm() {

  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const submittedText = `Merci ${name}, une réponse vous sera apportée à l'adresse mail suivante : ${email} ! À bientôt!`;
    setSubmittedMessage(submittedText);
  };

  return (
    <>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className='formLabel'>Nom : </label>
        <input type="text" name="name" placeholder="Entrez votre nom" className='smallInput' required/>
        <label htmlFor="email" className='formLabel'>Email : </label>
        <input type="email" name="email" placeholder="votre@mail.com" className='smallInput' required/>
        <label htmlFor="message" className='formLabel'>Message : </label>
        <textarea type="text" name="message" placeholder="Écrivez votre message..." className='largeInput' />
        <input type="submit" value="Envoi" className='buttonEnvoi'/>
        {submittedMessage && <p className='message'>{submittedMessage}</p>}
      </form>

    </>
  );
}