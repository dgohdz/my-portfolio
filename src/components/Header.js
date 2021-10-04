import React, {Component} from 'react';
import '../stylesheets/Navbar.css';
import diego from "../assets/images/diego-image.png"
import { Link } from "react-scroll"

export default class Header extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <img src={diego} alt="diego" className="diego-image"/>
                <ul className="nav-menu">
                    <li>
                        <Link to="Home">HOME</Link>
                    </li>
                    <li>
                        <Link to="Resume">RESUME</Link>
                    </li>
                    <li>
                        <Link to="Projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
