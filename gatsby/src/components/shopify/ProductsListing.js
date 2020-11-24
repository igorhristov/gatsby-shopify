import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          publishedAt(formatString: "YYYY")
          title
          description
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          variants {
            id
            sku
            title
            price
          }
          tags
        }
      }
    }
  }
`
const ProductsListing = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
  console.log(allShopifyProduct)
  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  )
}

export default ProductsListing
