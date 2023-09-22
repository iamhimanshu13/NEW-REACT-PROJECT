import React, { useState } from "react";
import "../Css/Style.css";
import ProductCard from "../Components/ProductCard";
// import TopContentImage1  from "../Assets/Image (1).jpg";
// import TopContentImage2  from "../Assets/Image (2).jpg";
import TopContentImage3 from "../Assets/Image (3).jpg";
// import TopContentImage4  from "../Assets/Image (4).jpg";
import TopContentImage5 from "../Assets/Image (5).jpg";
import TopContentImage6 from "../Assets/Image (6).jpg";
import TopContentImage7 from "../Assets/Image (7).jpg";
import TopContentImage8 from "../Assets/Image (8).jpg";
// import TopContentImage9  from "../Assets/Image (9).jpg";
import TopContentImage10 from "../Assets/Image (1).webp";

const HomePage = () => {
  const [productDetail, setProductDetail] = useState([
    {
      id: 1,
      name: "silver ring",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem perspiciatis, nam nihil ea dicta libero totam odit quae molestias.",
    },
    { id: 2,
      name: "silver ring",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem perspiciatis, nam nihil ea dicta libero totam odit quae molestias.",},
    { id: 3,
      name: "silver ring",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem perspiciatis, nam nihil ea dicta libero totam odit quae molestias.",},
    { id: 4,
      name: "silver ring",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem perspiciatis, nam nihil ea dicta libero totam odit quae molestias.",},
    { id: 5,
      name: "silver ring",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem perspiciatis, nam nihil ea dicta libero totam odit quae molestias.",},
    { id: 6,
      name: "silver ring",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quidem perspiciatis, nam nihil ea dicta libero totam odit quae molestias.",},
 
  ]);


  return (
    <div className="content-box">
      <div className="content-top">
        <div className="content-top-left"></div>
        <div className="content-top-right"></div>
      </div>

      <div className="content-top-2">
        <h1 className="heading-main">TAG-LINE-HEADING</h1>
        <div className="content-top-2-down">
          <div className="content-top-2-left">
            <h1 className="headline-content">HEADING</h1>
            <p className="content-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              labore quas at, autem ullam iure nihil impedit obcaecati
              reprehenderit sint natus similique adipisci accusantium, atque
              eligendi neque sequi. Consequuntur enim pariatur, tempore
              voluptates laboriosam nam dignissimos? Accusamus repellat nemo
              unde? Quod eum amet dolorum incidunt cum, assumenda sed eos
              adipisci.
            </p>
            <br />
            <p className="content-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              labore quas at, autem ullam iure nihil impedit obcaecati
              reprehenderit sint natus similique adipisci accusantium, atque
              eligendi neque sequi. Consequuntur enim pariatur, tempore
              voluptates laboriosam nam dignissimos? Accusamus repellat nemo
              unde? Quod eum amet dolorum incidunt cum, assumenda sed eos
              adipisci.
            </p>
          </div>
          <div className="content-top-2-right"></div>
        </div>
      </div>

      <div className="content-top-2-1">
        <h1>TAG-LINE-HEADING</h1>
        <div className="content-top-2-down-1">
          <div className="content-top-2-left">
            <h1 className="headline-content">HEADING</h1>
            <p className="content-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              labore quas at, autem ullam iure nihil impedit obcaecati
              reprehenderit sint natus similique adipisci accusantium, atque
              eligendi neque sequi. Consequuntur enim pariatur, tempore
              voluptates laboriosam nam dignissimos? Accusamus repellat nemo
              unde? Quod eum amet dolorum incidunt cum, assumenda sed eos
              adipisci.
            </p>
            <br />
            <p className="content-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              labore quas at, autem ullam iure nihil impedit obcaecati
              reprehenderit sint natus similique adipisci accusantium, atque
              eligendi neque sequi. Consequuntur enim pariatur, tempore
              voluptates laboriosam nam dignissimos? Accusamus repellat nemo
              unde? Quod eum amet dolorum incidunt cum, assumenda sed eos
              adipisci.
            </p>
          </div>
          <div className="content-top-2-right-down"></div>
        </div>
      </div>

      <div className="conntent-middle">
        <div className="product-card-box">
          <ProductCard

            image={TopContentImage3}
          />
          <ProductCard

            image={TopContentImage5}
          />
          <ProductCard

            image={TopContentImage7}
          />
        </div>
        <div className="product-card-box">
          <ProductCard

            image={TopContentImage10}
          />
          <ProductCard

            image={TopContentImage6}
          />
          <ProductCard

            image={TopContentImage8}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
