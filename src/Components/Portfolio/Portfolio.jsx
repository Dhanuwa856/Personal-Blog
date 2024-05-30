import React, { useState } from "react";
import "./Portfolio.css";
import Img01 from "../../assets/portfolio/portfolio-1.jpg";
import Img02 from "../../assets/portfolio/portfolio-2.jpg";
import Img03 from "../../assets/portfolio/portfolio-3.jpg";
import Img04 from "../../assets/portfolio/portfolio-4.jpg";
import Img05 from "../../assets/portfolio/portfolio-5.jpg";
import Img06 from "../../assets/portfolio/portfolio-6.jpg";
import Img07 from "../../assets/portfolio/portfolio-7.jpg";
import Img08 from "../../assets/portfolio/portfolio-8.jpg";
import Img09 from "../../assets/portfolio/portfolio-9.jpg";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Item from "../Item/Item";

const Portfolio = () => {
  const [items, setItems] = useState([
    {
      category: "app",
      title: "App 1",
      image: Img01,
    },
    {
      category: "web",
      title: "Web 1",
      image: Img02,
    },
    {
      category: "app",
      title: "App 2",
      image: Img03,
    },
    {
      category: "app",
      title: "App 3",
      image: Img04,
    },
    {
      category: "web",
      title: "Wpp 2",
      image: Img05,
    },
    {
      category: "card",
      title: "Card 2",
      image: Img06,
    },
    {
      category: "web",
      title: "web 3",
      image: Img07,
    },
    {
      category: "card",
      title: "Card",
      image: Img08,
    },
    {
      category: "card",
      title: "Card 3",
      image: Img09,
    },
  ]);

  const categories = Array.from(new Set(items.map((item) => item.category)));

  const [filteredItems, setFilteredItems] = useState(items);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };
  const handleCategorySelect = (category) => {
    if (category === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter((item) => item.category === category));
    }
  };
  return (
    <div className="portfolio container">
      <p className="p-text">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="categories-section">
        <CategoryFilter
          categories={["All", ...categories]}
          onSelectCategory={handleCategorySelect}
        />
        <div className="item-list">
          {filteredItems.map((item, index) => (
            <Item
              key={index}
              category={item.category}
              title={item.title}
              card_image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
