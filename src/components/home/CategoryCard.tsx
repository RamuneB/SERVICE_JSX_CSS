import React from "react";
import { useNavigate, generatePath } from "react-router-dom";
import UrlIcon from "../common/UrlIcon";
import styles from "./CategoryList.module.scss";
import { ROUTES } from "../../router/consts";

// Apibrėžiame Category tipo struktūrą
interface Category {
  name: string;
  url: string;
  color: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, url, color } = category;
  const navigate = useNavigate();

  // Sukuriame kelią su kategorijos pavadinimu
  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });

  // Funkcija, kuri nukreipia į norimą kategoriją
  const handleClick = () => {
    navigate(categoryPath);
  };

  return (
    <div className={styles.card} onClick={handleClick} style={{ cursor: "pointer" }}>
      <UrlIcon
        url={url}
        style={{ width: 48, height: 48, backgroundColor: color }}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
