import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { categories } from "../components/consts/category";
import BusinessList from "../components/home/BusinessList";
import CategoryCard from "../components/home/CategoryCard";
import styles from "./VerticalCategoryList.module.scss";


const VerticalCategoryList = () => {
  const { categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryName || ""); // Pradinė būsena

  // Funkcija kategorijos pasirinkimui
  const handleCategoryClick = (category) => {
    console.log("Pasirinkta kategorija:", category.name); // Diagnostinis pranešimas
    setSelectedCategory(category.name); // Atnaujina pasirinktą kategoriją
  };

  return (
    
    
    <div className={styles.container}>
      <div className={styles.categoryList}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.container}>
      {categories.map((category) => (
        <div key={category.name} onClick={() => handleCategoryClick(category)}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
      </div>

      <div className={styles.businessList}>
        {/* Jei pasirinkta kategorija, rodoma atitinkama BusinessList */}
        {selectedCategory ? (
         <BusinessList category={selectedCategory} />
        ) : (
          <p>Please select a category to see the businesses.</p>
          
        )}
      </div>
  
    </div>
  );
};

export default VerticalCategoryList;