import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/Layout";
import Tours from "../components/tours/Tours";
import StyledHero from "../components/StyledHero";
import {graphql} from "gatsby";

import SEO from "../components/SEO";

const Tour = ({data}) => {
  return (
    <Layout>
      <SEO title="Tour" />
      <StyledHero img={data.tourBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export const query = graphql`
query {
  tourBcg:file(relativePath:{eq:"tourBcg.jpg"}) {
    childImageSharp {
      fluid(quality:90, maxWidth:4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    
  }
}
`
export default Tour
