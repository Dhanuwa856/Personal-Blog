import React from "react";
import "./NavBar.css";
import { HiOutlineHome } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { BiBookContent } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { FaBarsProgress } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="" className="active">
            <HiOutlineHome /> <div className="nav-text">Home</div>
          </a>
        </li>
        <li>
          <a href="">
            <FiUser /> <div className="nav-text">About</div>
          </a>
        </li>
        <li>
          <a href="">
            <IoDocumentOutline /> <div className="nav-text">Resume</div>
          </a>
        </li>
        <li>
          <a href="">
            <BiBookContent /> <div className="nav-text">Portfolio</div>
          </a>
        </li>
        <li>
          <a href="">
            <FaBarsProgress /> <div className="nav-text">Services</div>
          </a>
        </li>
        <li>
          <a href="">
            <LuMail /> <div className="nav-text">Contact</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
