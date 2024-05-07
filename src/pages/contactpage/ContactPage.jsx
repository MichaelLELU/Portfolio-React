import ContactForm from "../../components/contactForm/ContactForm";
import './contactPageStyle.scss'

export default function ContactPage () {
    return (
        <main>
            <div className="top">
                <h1>Contact</h1>
                <p>Prêt à concrétiser vos idées ?<br/> Contactez-moi dès maintenant pour commencer à transformer vos idées en réalité digitale.</p>
            </div>
            <ContactForm/>
        </main>
    )
}