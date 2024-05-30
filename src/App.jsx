import React from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Facts from "./Components/Facts/Facts";
import Skill from "./Components/Skill/Skill";
import Resume from "./Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Item from "./Components/Item/Item";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <>
      <Hero />
      <NavBar />
      <Title title="About" />
      <About />
      <Title title="facts" />
      <Facts />
      <Title title="skills" />
      <Skill />
      <Title title="RESUME" />
      <Resume />
      <Title title="PORTFOLIO" />
      <Portfolio />
      <Title title="SERVICES" />
      {/* <Services /> */}
    </>
  );
};

export default App;
