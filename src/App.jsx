import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="wrapper fadeIn">
      <Navbar />
      <div className="container">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
