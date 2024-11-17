import React from "react"
import { CiSearch } from "react-icons/ci";
import Button from "../common/Button";
import SearchInput from "../common/SearchInput";
import styles from "./Hero.module.scss";
import { useState } from "react"; // Importuokite useState

const Hero = () => {
  // Įvesties reikšmės valdymas
  const [searchQuery, setSearchQuery] = useState("");

  // Funkcija paieškos atlikimui
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Čia galite pridėti logiką, kad atliktumėte paiešką pagal searchQuery
  };

  // Funkcija, kuri atnaujina įvesties lauką
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.searchContainer}>
        {/* Paieškos laukas su valdymu */}
        <SearchInput
          placeholder="Search services..."
          value={searchQuery} // Priskiria įvesties reikšmę
          onChange={handleInputChange} // Kiekvieną kartą atnaujina įvestį
        />
        
        {/* Paieškos mygtukas su ikona */}
        <Button rounded onClick={handleSearch}>
          <CiSearch fontSize={24} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
