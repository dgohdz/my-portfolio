import React, { Component } from 'react'
import '../stylesheets/Header.css'


export default class Header extends Component {
    render() {
        return (
            <>
                <ul className="navbar">
                    <li>Home</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </>
        )
    }
}
