import React from "react";
import Product1 from "../assets-img/product (33).jpg";

const ProductDetailPage = () => {
  
  return (
    <div className="productpage">
      <div className="productpage-left">
        <img className="product-image-detail" src={Product1} alt="" />
      </div>
      <div className="productpage-right">
        <div className="productdetail-text-box">
          <h1 className="product-font">Product Prize</h1>
          <h2 className="product-n">Silver Ring</h2>
          <h3 className="product-p">
            <i className="fa-solid fa-indian-rupee-sign"></i> 5200
            <i className="fa-solid fa-circle-info"></i>
          </h3>
          <h3 className="product-r">
            <i className="fa-solid fa-indian-rupee-sign"></i> 9000
          </h3>
          <h3 className="product-percentage"> -30% off</h3>
        </div>
        <div className="productdetail-text-box">
          <h1 className="product-font">Product Discription</h1>
          {/* <h2 className='product-n'>Silver Ring</h2> */}
          <h3 className="product-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
            veritatis nostrum, sit repudiandae illum dicta quam obcaecati
            repellendus! Doloribus velit corporis
          </h3>
          {/* <h3 className='product-r'><i className="fa-solid fa-indian-rupee-sign"></i> 9000  </h3>
            <h3 className='product-percentage'> -30%  off</h3> */}
        </div>
        <div className="productdetail-text-box">
          <h1 className="product-font">Product Detail</h1>
        </div>
        <div className="details-button-box">
          <button className="button">
            <i style={{color:"white" , fontSize:"16px"}} className="fa-solid fa-cart-shopping svg-icon"></i>
            <span className="lable">Add to Cart</span>
          </button>
          <button className="button">
            <i style={{color:"white" , fontSize:"16px"}} className="fa-solid fa-cart-shopping svg-icon"></i>
            <span className="lable"> Show More Products</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
