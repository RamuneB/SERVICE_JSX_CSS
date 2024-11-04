import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/consts"; // Patikrinkite, ar kelias yra teisingas
import CategoryCard from "./CategoryCard";
import styles from "./CategoryList.module.scss";

const categories = [
  {
    name: "cleaning",
    color: "#b12fde",
    url: "https://img.icons8.com/?size=100&id=8088&format=png&color=000000",
  },
  {
    name: "repair",
    color: "#ecbb3a",
    url: "https://img.icons8.com/?size=100&id=59827&format=png&color=000000",
  },
  {
    name: "painting",
    color: "#059e96",
    url: "https://img.icons8.com/?size=100&id=8141&format=png&color=000000",
  },
  {
    name: "shifting",
    color: "#e23e40",
    url: "https://img.icons8.com/?size=100&id=9341&format=png&color=000000",
  },
  {
    name: "plumbing",
    color: "#ea9319",
    url: "https://img.icons8.com/?size=100&id=24925&format=png&color=000000",
  },
  {
    name: "electric",
    color: "#1f71c5",
    url: "https://img.icons8.com/?size=100&id=9094&format=png&color=000000",
  },
];

const CategoryList = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (!ROUTES.VERTICAL_CATEGORY_LIST) {
      console.error("ROUTES.VERTICAL_CATEGORY_LIST is undefined. Check your routes configuration.");
      return;
    }
    
    // Nukreipiame naudotoją į VerticalCategoryList puslapį su kategorijos pavadinimu URL parametre
    navigate(`${ROUTES.VERTICAL_CATEGORY_LIST.replace(":categoryName", category.name)}`);
  };

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <div key={category.name} onClick={() => handleCategoryClick(category)}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
