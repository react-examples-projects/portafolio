import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import initCursor from "./helpers/cursors";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const unsubscribe = initCursor();
    return unsubscribe;
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
