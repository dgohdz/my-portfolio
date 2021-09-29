import React, { Component } from 'react'
import '../stylesheets/Navbar.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">DH</h1>
                <ul className="nav-menu">
                    <li>HOME</li>
                    <li>RESUME</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        )
    }
}
