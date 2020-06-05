import React from 'react'
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import styles from "../css/Template.module.css";
import Image from "gatsby-image";
import {FaMoneyBillWave, FaMap} from "react-icons/fa";
import Day from "../components/singletour/Day";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Template = ({data}) => {
  const {name,price,country,days,description:{description}, journey,images,start} = data.tour

  //destructure four images array from images prop
  const [mainImage, ...tourImages] = images
  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}> 
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return <Image key={index} fluid={item.fluid} alt="single tour" className={styles.image} />
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>start on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">back to tours</AniLink>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
query ($slug: String!) {
  tour:contentfulTour(slug: {eq: $slug}) {
    name
    price
    country
    days
    start(formatString: "YYYY MMMM Do, dddd")
    description {
      description
    }
    journey {
      day
      info
    }
    images {
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`


export default Template
