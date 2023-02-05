import React from "react";
import PropTypes from 'prop-types';
import styles from './vacstyle.module.css';

function VacationRental({properties}) {

  return (
    <>
      <div >
        {properties.map((properties, i) => (
          <ul className={styles.propcard} key={i}>
            <div className={styles.propcard.itemse}>
            <p> <img src = {properties.image} className={styles.propcard.img} alt=""/></p>
            <p><b> {properties.title}</b></p>
            </div >
            <div className={styles.propcard.itemse}>
              <p><b>Type:</b> {properties.houseType}</p>
            <p><b>Address:</b>{properties.location.city}, {properties.location.country} </p>
            <p><b>Cost:</b>${properties.payment.cost} per night</p>
            <p>{properties.payment.description}</p>
            <p><b>Host:</b> {properties.host.name}</p>
             {properties.host.isSuperhost ? <b>SuperHost</b> : ""}
            <p>rating {properties.rating.stars}</p>
            <p>Number of reviews {properties.rating.reviews}</p>
            </div >
          </ul>
        ))}
      </div>
    </>
  )
}

VacationRental.propTypes = {
  title: PropTypes.string,
  houseType: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.shape ({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  payment: PropTypes.shape ({
    cost: PropTypes.number,
    description: PropTypes.string,
  }),
  host: PropTypes.shape ({
    name: PropTypes.string,
    isSuperhost: PropTypes.bool,
  }),
  rating: PropTypes.shape ({
    stars: PropTypes.number,
    reviews: PropTypes.number,
  })
};
export default VacationRental;
