import React from 'react'
import ProductViewer from '../../Components/ProductViewer'

import TopContentImage1  from "../../Assets/Image (1).jpg";
import TopContentImage2  from "../../Assets/Image (2).jpg";
import TopContentImage3  from "../../Assets/Image (3).jpg";
import TopContentImage4  from "../../Assets/Image (4).jpg";
import TopContentImage5  from "../../Assets/Image (5).jpg";
import TopContentImage6  from "../../Assets/Image (6).jpg";
import TopContentImage7  from "../../Assets/Image (7).jpg";
import TopContentImage8  from "../../Assets/Image (8).jpg";
import TopContentImage9  from "../../Assets/Image (9).jpg";
import TopContentImage10 from "../../Assets/Image (1).webp";


const Gold = () => {
  return (
    <div>
                  
        <div>

      <div className='product-heading'>
      <h1 className="heading-main">Oranament</h1>
      </div>
      <div className='ProductViewer-row'>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
        <div> <ProductViewer imageproduct={TopContentImage2} /></div>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
      </div>
        </div>

            
        <div>

      <div className='product-heading'>
      <h1 className="heading-main">Antique Set</h1>
      </div>
      <div className='ProductViewer-row'>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
      </div>
        </div>

            
        <div>

      <div className='product-heading'>
      <h1 className="heading-main">Coins For Gift</h1>
      </div>
      <div className='ProductViewer-row'>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
        <div> <ProductViewer imageproduct={TopContentImage1} /></div>
      </div>
        </div>

        <div>

<div className='product-heading'>
<h1 className="heading-main">Nosepin</h1>
</div>
<div className='ProductViewer-row'>
  <div> <ProductViewer imageproduct={TopContentImage1} /></div>
  <div> <ProductViewer imageproduct={TopContentImage1} /></div>
  <div> <ProductViewer imageproduct={TopContentImage1} /></div>
</div>
  </div>


    </div>
  )
}

export default Gold