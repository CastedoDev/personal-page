import "./projectcard.css"
import react_icon from "../../images/react-icon-mod.png"
import git_icon from "../../images/git-icon.png"
import aws_icon from "../../images/aws-icon.png"
import java_icon from "../../images/java-icon.png"
import postgresql_icon from "../../images/postgresql-icon.png"
import springboot_icon from "../../images/springboot-icon.png"
import python_icon from "../../images/python-icon.png"
import mongodb_icon from "../../images/mongodb-icon.png"


const Projectcard = ({name, description, stack}) => {
    return (

        <div className="project-card-container">
            <h2 className="project-name">{name}</h2>
            <p className="project-card-description">{description}</p>
            <div>
                {stack.react ? <img className="project-card-icon" src={react_icon} alt="react-icon"/> : <></>}
                {stack.git ? <img className="project-card-icon" src={git_icon} alt="git-icon"/> : <></>}
                {stack.aws ? <img className="project-card-icon" src={aws_icon} alt="aws-icon"/> : <></>}
                {stack.java ? <img className="project-card-icon" src={java_icon} alt="java-icon"/> : <></>}
                {stack.postgresql ?
                    <img className="project-card-icon" src={postgresql_icon} alt="postgresql-icon"/> : <></>}
                {stack.springboot ?
                    <img className="project-card-icon" src={springboot_icon} alt="springboot-icon"/> : <></>}
                {stack.python ? <img className="project-card-icon" src={python_icon} alt="python-icon"/> : <></>}
                {stack.mongodb ? <img className="project-card-icon" src={mongodb_icon} alt="mongodb-icon"/> : <></>}
            </div>
        </div>
    );
}

export default Projectcard;