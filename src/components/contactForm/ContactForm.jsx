import './contactStyle.scss'

export default function ContactForm() {
    return (
      <>
        <form className="contactForm">
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