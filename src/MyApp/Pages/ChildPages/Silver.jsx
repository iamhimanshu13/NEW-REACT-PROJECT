import React from 'react'
import ProductViewer from '../../Components/ProductViewer'

import Product1  from "../../assets-img/product (33).jpg";
import Product2  from "../../assets-img/product (34).jpg";
import Product3  from "../../assets-img/product (35).jpg";
import Product4  from "../../assets-img/product (7).jfif";
import Product5  from "../../assets-img/product (11).jfif";
import Product6  from "../../assets-img/product (10).jpg";
import Product7  from "../../assets-img/product (32).jpg";
import Product8  from "../../assets-img/product (30).jpg";
import Product9  from "../../assets-img/product (9).jfif";
import Product10 from "../../assets-img/product (10).jfif";
// import Product11  from "../../assets-img/product (1).jpeg";
// import Product12 from "../../assets-img/product (1).jpeg";


const Silver = () => {
  return (
    <div>
                  
        <div>

      <div className='product-heading'>
      <h1 className="heading-main">Rings</h1>
      </div>
      <div className='ProductViewer-row'>
        <div> <ProductViewer imageproduct={Product1} /></div>
        <div> <ProductViewer imageproduct={Product2} /></div>
        <div> <ProductViewer imageproduct={Product3} /></div>
      </div>
        </div>

            
        <div>

      <div className='product-heading'>
      <h1 className="heading-main">Bracelet</h1>
      </div>
      <div className='ProductViewer-row'>
        <div> <ProductViewer imageproduct={Product4} /></div>
        <div> <ProductViewer imageproduct={Product5} /></div>
        <div> <ProductViewer imageproduct={Product6} /></div>
      </div>
        </div>

            
        <div>

      <div className='product-heading'>
      <h1 className="heading-main">Chain Set</h1>
      </div>
      <div className='ProductViewer-row'>
        <div> <ProductViewer imageproduct={Product7} /></div>
        <div> <ProductViewer imageproduct={Product8} /></div>
        <div> <ProductViewer imageproduct={Product9} /></div>
      </div>
        </div>

        <div>

<div className='product-heading'>
<h1 className="heading-main">Payal</h1>
</div>
<div className='ProductViewer-row'>
  <div> <ProductViewer imageproduct={Product10} /></div>
  {/* <div> <ProductViewer imageproduct={Product11} /></div>
  <div> <ProductViewer imageproduct={Product12} /></div> */}
</div>
  </div>


    </div>
  )
}

export default Silver