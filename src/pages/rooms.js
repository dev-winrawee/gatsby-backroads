import React, { Component } from 'react';
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import {graphql} from "gatsby";

import SEO from "../components/SEO";

class rooms extends Component {
    render() {
        return (
            <Layout>
              <SEO title="Room" />
                <StyledHero img = {this.props.data.goldseabeach.childImageSharp.fluid}/>
            </Layout>
        );
    }
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

export default rooms;
