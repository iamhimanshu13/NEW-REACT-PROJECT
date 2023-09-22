import React from 'react'

const ProductCard = (props) => {
  return (
    <div>  <div className="product-card">
    <div className="card">
        <img className='product-image' src={props.image} alt="" />
      <div className="card__content">
        <p className="card__title">Silver Ring</p>
        <p className="card__description">
         This ring is one of the best ring in this shop
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione 
        </p>
        <button className="card__button">Open Product</button>
        <button className="card__button secondary">Add to cart</button>
      </div>  
    </div>
  </div></div>
  )
}

export default ProductCard