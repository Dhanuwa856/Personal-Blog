import React from "react";
import "./Item.css";
import Img_01 from "../../assets/portfolio/portfolio-1.jpg";
import { FiPlus, FiLink } from "react-icons/fi";

const Item = ({ card_image, title, category }) => {
  return (
    <div className="item-card">
      <img src={card_image} alt="" />
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <div className="card-icons">
          <span>
            <FiPlus />
          </span>
          <span>
            <FiLink />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
