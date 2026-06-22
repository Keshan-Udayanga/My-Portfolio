import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import SkillsSection from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <SkillsSection />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
