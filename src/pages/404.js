import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/Layout";

import styles from "../css/error.module.css";

import Banner from "../components/banner";

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner 
        title= "oops it's a dead end"
        >
        <Link to= "/" className="btn-white">back to homepage</Link>
        </Banner>
      </header>
    </Layout>
  )
}
export default error
