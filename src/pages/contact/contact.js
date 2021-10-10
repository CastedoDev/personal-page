import Header from "../../components/header/header";
import './contact.css'

const Contact = () => (
    <>
        <Header/>
        <div className="contact-container">
            <h1 className="about-title">
                Contact
            </h1>
            <p className="about-description">
                If you feel the need to contact me, feel free to send a email to:
                castedo.dev@gmail.com
            </p>
            <p className="about-description">
                I will try to reply as fast as posible.
            </p>
        </div>
    </>
)

export default Contact;