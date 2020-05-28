import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout";

import StyledHero from "../components/StyledHero";
import {graphql} from "gatsby";

import styles from "../css/error.module.css";

import Banner from "../components/banner";

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner 
        title= "oops it's a dead end"
        >
        <AniLink fade to= "/" className="btn-white">back to homepage</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export const query = graphql`
query {
  goldseabeach:file(relativePath:{eq:"goldseabeach.jpg"}) {
    childImageSharp {
      fluid(quality:90, maxWidth:4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    
  }
}
`

export default error

