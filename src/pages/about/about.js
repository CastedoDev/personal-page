import Header from "../../components/header/header";
import './about.css'

const About = () => (
    <>
        <Header/>
        <div className="about-container">
            <h1 className="about-title">
                Who am I?
            </h1>
            <p className="about-description">
                I'm a curious guy with a many ideas that love create things and the software development give me the
                opportunity to make it possible.
            </p>
            <p className="about-description">
                I'm automatic quality assurance engineer and software development. I have almost 4 years of experience,
                working for companies as: Vodafone, ING Bank, DIA, Santander Bank.
            </p>
            <a href="../../CV-CarlosCastedo-English.pdf" download>Download English CV</a>
        </div>
    </>
)

export default About;