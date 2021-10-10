import Header from "../../components/header/header";
import './projects.css'
import Projectcard from "../../components/project-card/projectcard";


const personalWeb = {
    name: "Personal Web",
    description: "The idea behind this project is having a place where I can write down all the " +
        "things and project that I do. And try to learn in the process.",
    stack: {
        react: true,
        aws: true,
        git: true,
        java: false,
        postgresql: false,
        springboot: false,
        python: false,
        mongodb: false
    }
}

const myMoneyCheck = {
    name: "MyMoneyCheck",
    description: "This will be an app from Android in a first place. Where you can record your " +
        "daily expenses, this will be the MVP. If I have time, I have already new features that I'll" +
        "love to add to the app. This is the first full stack project.",
    stack: {
        react: true,
        aws: true,
        git: true,
        java: true,
        postgresql: true,
        springboot: true,
        python: false,
        mongodb: false
    }
}

const rodede = {
    name: "Rodede",
    description: "This is an web application to comment and rating movies and series.",
    stack: {
        react: true,
        aws: true,
        git: true,
        java: true,
        postgresql: true,
        springboot: true,
        python: false,
        mongodb: false
    }
}

const winBet = {
    name: "WinBet",
    description: "This is a console application that compare bets and analyse between different bet houses trying to find" +
        "a surebet.",
    stack: {
        react: false,
        aws: false,
        git: true,
        java: false,
        postgresql: false,
        springboot: false,
        python: true,
        mongodb: true
    }
}

const buy2Rent = {
    name: "Buy2Rent",
    description: "This is a console application that obtain the sell price of the house of a zone and the price of a similar" +
        "house on rent. Using a default parameters defined by the user, for example percentage of the mortgage to pay upfront. " +
        "Obtain good opportunities to but as a invest.",
    stack: {
        react: false,
        aws: false,
        git: true,
        java: false,
        postgresql: false,
        springboot: false,
        python: true,
        mongodb: true
    }
}

const teTrad = {
    name: "TeTrad",
    description: "This is a bridge between telegram and mql4. Which the main feature is generate a buy or sel order in mql4, " +
        "from a message on a telegram",
    stack: {
        react: false,
        aws: false,
        git: true,
        java: false,
        postgresql: false,
        springboot: false,
        python: true,
        mongodb: true
    }
}

const Projects = () => {

    return (
        <>
            <Header/>
            <div className="project-container">
                <h1 className="project-title">
                    Projects
                </h1>
                <p className="project-description">
                    I'm building different ideas. The objective to build all of these
                    ideas is learn in the process new technologies. Please, feel free
                    to give some ideas or provide constructive criticism.
                </p>
                <hr className="project-divider"/>
                <div className="projects-description-container">
                    <Projectcard name={personalWeb.name} description={personalWeb.description} stack={personalWeb.stack}/>
                    <Projectcard name={myMoneyCheck.name} description={myMoneyCheck.description} stack={myMoneyCheck.stack}/>
                </div>
                <div className="projects-description-container">
                    <Projectcard name={rodede.name} description={rodede.description} stack={rodede.stack}/>
                    <Projectcard name={winBet.name} description={winBet.description} stack={winBet.stack}/>
                </div>
                <div className="projects-description-container">
                    <Projectcard name={buy2Rent.name} description={buy2Rent.description} stack={buy2Rent.stack}/>
                    <Projectcard name={teTrad.name} description={teTrad.description} stack={teTrad.stack}/>
                </div>
            </div>
        </>
    );
}

export default Projects