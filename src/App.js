import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
