import React from "react";
import { Link } from "react-router-dom";

const ProductViewer = (props) => {
  return (
    <div className="ProductViewer">
      <div className="ProductViewer-details">
        <img className="product-image-main" src={props.imageproduct} alt="" />
        <p className="text-title">Card title</p>
        <p className="text-body">Here are the details of the card</p>
      </div>
      <Link
        to={{
          pathname: "/ProductDetailPage",
          state: {
            productimage: props.imageproduct,
            productId: "5", // Set your product ID here
          },
        }}
        className="ProductViewer-button"
      >
        Add to Cart{" "}
        <i style={{ color: "white" }} className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
};

export default ProductViewer;
