import './home.css'
import { useHistory } from "react-router-dom";

const Home = () => {

    let history = useHistory();

    function handleClickAbout() {
        history.push("/about")
    }

    function handleClickProjects() {
        history.push("/projects")
    }

    function handleClickBlog() {
        history.push("/blog")
    }

    return (
        <div className="home_container">
            <p className="about-paragraph">
                Hello! <br/> I'm Carlos Castedo.
            </p>
            <hr className="home_separator" />
            <div className="home_buttons_container">
                <button className="home_button" onClick={handleClickAbout}>ABOUT</button>
                <button className="home_button" onClick={handleClickProjects}>PROJECTS</button>
                <button className="home_button" onClick={handleClickBlog}>BLOG</button>
            </div>
        </div>
    );
}


export default Home;