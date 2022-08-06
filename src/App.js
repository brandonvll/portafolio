import React from "react";
import Menu from "./components/Menu";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Briefcase from "./components/Briefcase";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Menu
          Home="Home"
          AboutMe="About Me"
          Skills="Skills"
          Briefcase="Briefcase"
          Contact="Contact"
        />
        <Home />
        <AboutMe />
        <Skills />
        <Briefcase />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
