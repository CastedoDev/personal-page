import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title">CARLOS DEV</h1>
            <nav className="header-nav">
                <NavLink className="header-link" activeClassName="active" to="/about">
                    ABOUT
                </NavLink>
                <NavLink className="header-link" activeClassName="active" to="/projects">
                    PROJECTS
                </NavLink>
                <NavLink className="header-link" activeClassName="active" to="/blog">
                    BLOG
                </NavLink>
                <NavLink className="header-link" activeClassName="active" to="/contact">
                    CONTACT
                </NavLink>
            </nav>
        </div>
    );
}

export default Header;