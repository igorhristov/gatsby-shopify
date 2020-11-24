import React from "react"
import Img from "gatsby-image"

const ProductDetail = ({ product }) => {
  console.log(product)
  const {
    id,
    title,
    description,
    images,
    publishedAt,
    tags,
    variants,
  } = product
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {description} <span>{publishedAt}</span>
      </p>
      {images && images.map(image => <Img fluid={image} alt={title} />)}
    </div>
  )
}

export default ProductDetail
