import {Route, Switch} from "react-router-dom";

import Home from './pages/home/home'

import './App.css'
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import Blog from "./pages/blog/blog";

const App = () => {
    return (
        <div className="app">
            <div className="app_body">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/blog" component={Blog}/>
                </Switch>
            </div>
        </div>
    )
}


export default App;

