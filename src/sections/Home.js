import React, {Component} from 'react'
import '../stylesheets/Home.css'
import '../App.css'
import github from "../assets/images/github.png"
import linkedin from "../assets/images/linkedin.png"


export default class Home extends Component {
    render() {
        return (
            <>
                <section id="Home">
                    <div className='home-container'>
                        <h1 className='name'>Diego Hernandez</h1>
                        <p className='job-title'>Front-end Developer</p>
                        <h1 className='greeting-heading'>Hello! I'm a creative front-end developer looking forward to working with you.</h1>
                    </div>
                    <div className="social-button-container">
                        <ul>
                            <a href="https://github.com/dgohdz" target="_blank" rel="noreferrer"><img src={github}
                                    alt="github icon"
                                    className="github"/></a>
                            <a href="https://drive.google.com/file/d/13203KjaitOUzQSXxXui8HqRx1kIv_g5E/view?usp=sharing" target="_blank" rel="noreferrer"><button className="button">Resume</button></a>
                            <a href="https://www.linkedin.com/in/dgohdz/" target="_blank" rel="noreferrer"><img src={linkedin}
                                    className="linkedin"
                                    alt="linkedin icon"/></a>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}
