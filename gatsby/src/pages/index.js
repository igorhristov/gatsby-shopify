import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/shopify/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Shopify</h1>
  
    <ProductsListing/>
  </Layout>
)

export default IndexPage
