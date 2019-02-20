import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`pitchy`, `application`, `react`]} />
    <h1>Building something awesome!</h1>
    <Link to="/page-2/">page 2</Link>
  </Layout>
)

export default IndexPage
