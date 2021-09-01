import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import NavBar from './components/Navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <NavBar/>
      <Home/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    )
  }
}
