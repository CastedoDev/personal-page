import {Route, Switch} from "react-router-dom";

import Header from './screens/header'
import Home from './screens/home'

import './App.css'
import About from "./screens/about";
import Contact from "./screens/contact";
import Projects from "./screens/projects";

const App = () => (
    <div className="app-container">
        <div className="app-card">
            <Header/>
            <div className="app-body">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/projects" component={Projects}/>
                </Switch>
            </div>
        </div>
    </div>
)

export default App;

