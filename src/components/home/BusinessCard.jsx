// import Button from "../common/Button";
// import styles from "./BusinessCard.module.scss";
// const BusinessCard = ({ business }) => {
//   return (
//     <div className={styles.card}>
//       {business.images.length && (
//         <img
//           src={business.images[0].url}
//           alt={business.name}
//           className={styles.image}
//         />
//       )}
//       <div className={styles.infoContainer}>
//         <span className={styles.chip}>{business.category}</span>
//         <h3 className={styles.name}>{business.name}</h3>
//         <p className={styles.contactPerson}>{business.contactPerson}</p>
//         <p className={styles.address}>{business.address}</p>
//         <Button>Book now</Button>
//       </div>
//     </div>
//   );
// };
// export default BusinessCard;
import Button from "../common/Button";
import styles from "./BusinessCard.module.scss";

const BusinessCard = ({ business }) => {
  return (
    <div className={styles.card}>
      {business.images.length > 0 && (
        <img
          src={business.images[0].url}
          alt={`${business.name} logo`} // Geresnis alt tekstas
          className={styles.image}
        />
      )}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Button onClick={() => console.log('Booking...')}>Book now</Button> {/* Pridėtas onClick */}
      </div>
    </div>
  );
};

export default BusinessCard;
