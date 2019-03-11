import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import 'npm-font-open-sans/open-sans';

const IndexPage = () => (
  <Layout>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet"/>
<SEO title="Home" keywords={[`pitchy`, `application`, `react`]} />
    <h1>Building something awesome!</h1>
    {/* <Link to="/page-2/">Page 2</Link> */}
  </Layout>
)

export default IndexPage
