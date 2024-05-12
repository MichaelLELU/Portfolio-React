import './contactStyle.scss'

export default function ContactForm() {

  const handleSubmit = (event) => {
    // Empêche le formulaire de se soumettre normalement
    event.preventDefault(); 

    // Récupérer les valeurs des champs du formulaire
    const name = event.target.name.value;
    const email = event.target.email.value;

    // Afficher une alerte avec les informations récupérées
    alert(`Merci, ${name} une réponse vous serra aporté a l'adresse mail suivante: ${email}! a bientot!`);
  };

    return (
      <>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name" className='formLabel'>Nom : </label>
          <input type="text" name="name" placeholder="entrez votre nom" className='smallInput'required/>
          <label htmlFor="email" className='formLabel'>Email : </label>
          <input type="email" name="email" placeholder="votre@mail.com" className='smallInput' required/>
          <label htmlFor="message" className='formLabel' >Message : </label>
          <textarea type="text" name="message" placeholder="écrivez votre message... " className='largeInput' />
          <input type="submit" value="ENVOI" className='buttonEnvoi'/>
        </form>
      </>
    )
  }