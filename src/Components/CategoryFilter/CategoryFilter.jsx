import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  return (
    <div className="category-filter mt-20">
      {categories.map((category, index) => (
        <button
          key={index}
          className={
            selectedCategory === category
              ? "category-btn active-category"
              : "category-btn"
          }
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
