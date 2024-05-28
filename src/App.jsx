import React from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Facts from "./Components/Facts/Facts";

const App = () => {
  return (
    <>
      <Hero />
      <NavBar />
      <Title title="About" />
      <About />
      <Title title="facts" />
      <Facts />
    </>
  );
};

export default App;
