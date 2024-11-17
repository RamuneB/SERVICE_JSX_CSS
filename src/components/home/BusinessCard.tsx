import React from "react";
import Button from "../common/Button";
import styles from "./BusinessCard.module.scss";

interface Business {
  name: string;
  category: string;
  contactPerson: string;
  address: string;
  images: { url: string }[]; // Nurodyta, kad images yra masyvas objektų su `url`
}

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className={styles.card}>
      {business.images.length > 0 && (
        <img
          src={business.images[0].url}
          alt={`${business.name} logo`} // Prasmę turintis alt tekstas
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Button onClick={() => alert(`Booking for ${business.name}...`)}>
          Book now
        </Button>
      </div>
    </div>
  );
};

export default BusinessCard;

