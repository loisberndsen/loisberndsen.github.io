import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";
import NavButton from "./NavButton";
import Navbar from "./Navbar";

const routes = [
    {
        link: "/about",
        title: "About me",
    },
    {
        link: "/projects",
        title: "My projects",
    },
    {
        link: "/skills",
        title: "Skills",
    },
    {
        link: "/contact",
        title: "Find me",
    }
];

export {
    routes
}

const Navigation = () => {

    return (
        <Router>
            <div>
                <Navbar/>
                <NavButton/>

                <Switch>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Navigation;