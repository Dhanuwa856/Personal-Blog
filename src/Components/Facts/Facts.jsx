import React from "react";
import "./Facts.css";
import { FaRegSmile } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { MdHeadsetMic } from "react-icons/md";
import { BsAward } from "react-icons/bs";
import CountUp from "../CountUp/CountUp";

const Facts = () => {
  return (
    <div className="facts container">
      <p className="p-text">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="facts-section">
        <ul>
          <li>
            <div className="icon">
              <FaRegSmile />
            </div>
            <h2>
              <CountUp end={232} />
            </h2>
            <p>Happy Clients</p>
          </li>
          <li>
            <div className="icon">
              <PiNotebookBold />
            </div>
            <h2>
              <CountUp end={521} />
            </h2>
            <p>Projects</p>
          </li>
          <li>
            <div className="icon">
              <MdHeadsetMic />
            </div>
            <h2>
              <CountUp end={1463} />
            </h2>
            <p>Hours Of Support</p>
          </li>
          <li>
            <div className="icon">
              <BsAward />
            </div>
            <h2>
              <CountUp end={25} />
            </h2>
            <p>Awards</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Facts;
