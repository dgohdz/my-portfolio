import React, {Component} from 'react';
import '../stylesheets/NavBar.css';
import diego from "../assets/images/diego-image.png"
import { Link } from "react-scroll"

export default class Header extends Component {
    render() {
        return (
            <section id="Home">
            <nav className="navbar-container">
            <img src={diego} alt="diego" className="diego-image"/>
                <ul className="nav-menu">
                    <li className="home-link">
                        <Link to="Home">HOME</Link>
                    </li>
                    <li className="resume-link">
                        <Link to="Resume">RESUME</Link>
                    </li>
                    <li className="projects-link">
                        <Link to="Projects">PROJECTS</Link>
                    </li>
                    <li className="contact-link">
                        <Link to="Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            </section>
        )
    }
}
