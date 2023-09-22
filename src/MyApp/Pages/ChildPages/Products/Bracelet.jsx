import React from "react";
import ProductViewer from "../../../Components/ProductViewer";

const Bracelet = () => {
  return (
    <>
      <div className="product-heading">
        <h1 className="heading-main"> Bracelet</h1>
      </div>
      <div className="ProductViewer-row">
        <div>
          <ProductViewer />
        </div>
        <div>
          <ProductViewer />
        </div>
        <div>
          <ProductViewer />
        </div>
      </div>
    </>
  );
};

export default Bracelet;
