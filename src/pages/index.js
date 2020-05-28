import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/Layout";
// import SimpleHero from "../components/simpleHero";
import Banner from "../components/banner";
import About from "../components/home/About";
import Services from "../components/home/services";
import StyledHero from "../components/StyledHero";
import {graphql} from "gatsby";

export default ({data}) => (

    <Layout>
        <StyledHero home= "true" img={data.goldseabeach.childImageSharp.fluid}>
            <Banner 
                title = "expore phuket"
                info = "Offering a terrace and views of the sea, Goldsea Beach Hotel is set in Patong Beach, 300 metres from Bangla Road."
            >
            <AniLink fade to="/rooms" className="btn-white">
                expore rooms start from $49 usd
            </AniLink>

            </Banner>
        </StyledHero>
    
        <About />
        <Services />
    </Layout>


)

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