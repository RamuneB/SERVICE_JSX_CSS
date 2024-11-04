// import classNames from "classnames";
// import { businesses } from "../consts/business";

// import BusinessCard from "./BusinessCard";
// import styles from "./BusinessList.module.scss";

// const BusinessList = ({ category, className }) => {
//   const filteredBusiness = category
//     ? businesses.filter((business) => business.category === category)
//     : businesses;

//   return (
//     <div className={classNames(styles.container, className)}>
//       {filteredBusiness.map((business, index) => (
//         <BusinessCard key={`${business._id}-${index}`} business={business} />
//       ))}
//     </div>
//   );
// };

// export default BusinessList;
import classNames from "classnames";
import { businesses } from "../consts/business";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessList.module.scss";


const BusinessList = ({ category, className }) => {
  const filteredBusiness = category
    ? businesses.filter((business) => 
        business.category.toLowerCase() === category.toLowerCase()
      )
    : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.length > 0 ? (
        filteredBusiness.map((business) => (
          <BusinessCard key={business._id} business={business} />
        ))
      ) : (
        <p>No businesses found.</p> // Pridėtas pranešimas, jei nėra verslų
      )}
    </div>
  );
};

export default BusinessList;

