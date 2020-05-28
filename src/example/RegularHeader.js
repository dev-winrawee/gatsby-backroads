import React from 'react'
import {StaticQuery, graphql} from "gatsby";

const getSiteData = graphql`
query {
  site {
    siteMetadata {
      author
      description
      title
    }
  }
}
`
const RegularHeader = () => {
  return (
    <StaticQuery query={getSiteData} render = {(data) => {
        console.log(data);
        return (
            <div>
                <h1>Title:{data.site.siteMetadata.title}</h1>
            </div>
        )
    }
    }
    />
  )
}

export default RegularHeader
