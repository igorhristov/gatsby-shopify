import React from "react"
import Img from 'gatsby-image'

const Product = ({ product }) => {
  return (
    <article>
      <h3>{product.title}</h3>
    <Img fluid={product.images[0] && product.images[0].localFile.childImageSharp.fluid} alt={product.title}/>
    </article>
  )
}

export default Product
