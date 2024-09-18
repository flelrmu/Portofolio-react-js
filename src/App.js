import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portofolio />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
