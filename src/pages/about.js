import React from 'react'; 
import Layout from "../components/layout"
import { Link } from "gatsby"

const About = () => (
    <Layout>
        <h1>About Page</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default About; 