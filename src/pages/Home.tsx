import React from "react";  // Pridėkite šią eilutę
import Hero from "../components/home/Hero";
import CategoryList from "../components/home/CategoryList";
import BusinessList from "../components/home/BusinessList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryList />
      <h2 className={styles.title}>Popular businesses</h2>
      <BusinessList />
    </>
  );
};

export default Home;
