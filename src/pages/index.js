import React from "react";
import {Link} from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/simpleHero";
import Banner from "../components/banner";
import About from "../components/home/About";
import Services from "../components/home/services";
export default () => (
    <Layout>
        <SimpleHero>
            <Banner 
                title = "expore phuket"
                info = "Offering a terrace and views of the sea, Goldsea Beach Hotel is set in Patong Beach, 300 metres from Bangla Road."
            >
            <Link to="/rooms" className="btn-white">
                expore rooms start from $49 usd
            </Link>

            </Banner>
        </SimpleHero>
        <About />
        <Services />
    </Layout>


)
