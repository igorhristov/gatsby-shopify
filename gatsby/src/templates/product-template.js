import React from "react"
import { graphql } from "gatsby"
import ProductDetail from "../components/shopify/ProductDetail"

const ProductTemplate = ({ data }) => {
  return (
    <>
      <h1>hi</h1>
      <ProductDetail product={data.shopifyProduct} />
    </>
  )
}


export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
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
`

export default ProductTemplate
