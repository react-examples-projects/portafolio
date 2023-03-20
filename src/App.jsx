import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import gradient1 from "./resources/gradient-1.png";

function App() {
  return (
    <div className="wrapper fadeIn">
      <Navbar />
      <main className="container">
        <img src={gradient1} className="gradient1" alt="gradient figure 1" />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
