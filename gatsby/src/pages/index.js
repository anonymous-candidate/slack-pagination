import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Sandbox from "../components/sandbox"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Pagination</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Sandbox />
    </div>
  </Layout>
)

export default IndexPage
