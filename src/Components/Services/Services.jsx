import React from "react";
import "./Services.css";
import { IoBasketball } from "react-icons/io5";

const Services = () => {
  return (
    <div className="services container">
      <p className="p-text">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="services-cards">
        <div className="services-card">
          <IoBasketball />
          <h2>Lorem ipsum</h2>
          <p>
            Eius ipsum eaque incidunt corporis, sint harum aperiam beatae
            ratione, minima ea dolorem nobis fugit voluptatibus placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
