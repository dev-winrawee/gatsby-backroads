import React from 'react'
import Title from "../Title";
import styles from "../../css/services.module.css";
import frontdesk from "../../images/last24.png";
import carrent from "../../images/car_key.svg";
import shuttlebus from "../../images/shuttle-bus.png";
import tourlocal from "../../images/tour_local.svg";



const Services = () => {
  return (
    <section className={styles.services}>
      <Title  title="our" subtitle="services"/>
      <div className={styles.center}> 
        <article className={styles.service}>
        <span>
            <img src={frontdesk} alt="frontdesk"/>
        </span>
        <h4>24 hours frontdesk</h4>
        </article >
        <article className={styles.service}>
        <span>
            <img src={carrent} alt="car rental"/>
        </span>
        <h4>Car rental</h4>
        </article>
        <article className={styles.service}>
        <span>
            <img src={shuttlebus} alt="shuttle bus"/>
        </span>
        <h4>Shuttle bus services</h4>
        </article>
        <article className={styles.service}>
        <span>
            <img src={tourlocal} alt="local tour"/>
        </span>
        <h4>local tour services</h4>
        </article>

      </div>
    </section>
  )
}

export default Services;
