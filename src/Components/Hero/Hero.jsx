import React, { useState } from "react";
import "./Hero.css";
import useTypewriter from "../useTypewriter/useTypewriter";
import useBlinkingCursor from "../useBlinkingCursor/useBlinkingCursor";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { GrSkype } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";

const Hero = () => {
  const words = [
    "Developer",
    "Programmer",
    "Freelancer",
    "Designer",
    "Software Engineer",
  ];
  const text = useTypewriter(words, 200, 3000);
  const [query, setQuery] = useState("");
  const showCursor = useBlinkingCursor();

  return (
    <div className="hero">
      <div className="hero-filter"></div>
      <div className="hero-info">
        <h1 className="user-name container">Dhanushka Rathnayaka</h1>
        <h3 className="container auto-type">
          I'm
          <span className="auto-text">
            {text}
            <span className={`blinking-cursor ${showCursor ? "show" : ""}`}>
              |
            </span>
          </span>
        </h3>
        <ul className="hero-social container">
          <li>
            <a href="/">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <GrSkype />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
