import React from "react";
import "./About.css";
import User_img from "../../assets/profile-img.jpg";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div className="about container">
      <p className="p-text">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="about-info">
        <div className="about-left">
          <img src={User_img} alt="" />
        </div>
        <div className="about-right">
          <h3>UI/UX Designer & Web Developer.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="user-info">
            <li>
              <IoIosArrowForward className="arrow" /> <span>Birthday:</span> 1
              May 1995
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>Age:</span> 20
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>Website:</span>{" "}
              www.example.com
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>Degree:</span>
              Master
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>Phone:</span>
              +123 456 7890
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>PhEmailone:</span>{" "}
              email@example.com
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>City:</span>
              New York, USA
            </li>
            <li>
              <IoIosArrowForward className="arrow" /> <span>Freelance:</span>{" "}
              Available
            </li>
          </ul>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
