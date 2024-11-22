import React from "react";
import classNames from "classnames";
import axios from "axios";
import { businesses } from "../consts/business";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessList.module.scss";

interface Business {
  _id: string;
  name: string;
  category: string;
  contactPerson: string;
  address: string;
  images: { url: string }[];
}

interface BusinessListProps {
  category?: string; // Kategorija gali būti neprivaloma
  className?: string; // Papildomos klasės
}

const BusinessList: React.FC<BusinessListProps> = ({ category, className }) => {
  const filteredBusinesses = category
    ? businesses.filter((business) =>
        business.category.toLowerCase() === category.toLowerCase()
      )
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusinesses.length > 0 ? (
        filteredBusinesses.map((business, index) => (
          // Sukuriame unikalų key, derinant _id ir index
          <BusinessCard key={`${business._id}-${index}`} business={business} />
        ))
      ) : (
        <p>No businesses found.</p>
      )}
    </div>
  );
};

export default BusinessList;
