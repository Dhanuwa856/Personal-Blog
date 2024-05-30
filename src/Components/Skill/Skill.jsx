import React from "react";
import "./Skill.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import CountUp from "../CountUp/CountUp";

const Skill = () => {
  return (
    <div className="skill container">
      <p className="p-text">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <ul className="progress-bars">
        <li>
          <div className="skil-name">
            <p>HTML</p>
            <p className="percentage">
              <CountUp end={99} />%
            </p>
          </div>
          <ProgressBar percentage={99} />
        </li>
        <li>
          <div className="skil-name">
            <p>CSS</p>
            <p className="percentage">
              <CountUp end={95} />%
            </p>
          </div>
          <ProgressBar percentage={95} />
        </li>
        <li>
          <div className="skil-name">
            <p>JAVASCRIPT</p>
            <p className="percentage">
              {" "}
              <CountUp end={92} />%
            </p>
          </div>
          <ProgressBar percentage={92} />
        </li>
        <li>
          <div className="skil-name">
            <p>React</p>
            <p className="percentage">
              {" "}
              <CountUp end={88} />%
            </p>
          </div>
          <ProgressBar percentage={88} />
        </li>
        <li>
          <div className="skil-name">
            <p>PYTHON</p>
            <p className="percentage">
              {" "}
              <CountUp end={60} />%
            </p>
          </div>
          <ProgressBar percentage={60} />
        </li>
        <li>
          <div className="skil-name">
            <p>FIGMA</p>
            <p className="percentage">
              {" "}
              <CountUp end={77} />%
            </p>
          </div>
          <ProgressBar percentage={77} />
        </li>
      </ul>
    </div>
  );
};

export default Skill;
