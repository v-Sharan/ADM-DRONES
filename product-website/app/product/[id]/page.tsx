import React from "react";
import { productFindQuery } from "@/actions/query";
import { client, urlFor } from "@/client";
import { type Products } from "@/types/SanityResults";
import { CarouselImage, Motion } from "@/components";
import "./page.scss";
// import Carousel from "@/components/Carousel/Carousel";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const _id = (await params).id;

  const products = await client.fetch<Products[]>(productFindQuery(_id));

  return (
    <Motion
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="product"
    >
      {/* <div
        className="product"
        style={{
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      > */}
      <div className="product-heading">
        <div className="product-heading-details">
          <h2 className="head-text">{products[0].title}</h2>
          <p>{products[0].description}</p>
          <h1>Versions</h1>
        </div>
      </div>
      <Motion
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delayChildren: 0.6 }}
        className="product-portfolio"
      >
        {products.map((product, index) => (
          <React.Fragment key={`${product._id}-${index}`}>
            {product.versions.map((ver) => (
              <div key={`${ver._id}`} className="product-overview">
                <div className="product-item" key={index}>
                  <div className="product__work__container">
                    <h1>{ver.versionName}</h1>
                    <img
                      src={urlFor(ver.imgUrl).format().url()}
                      alt={ver.versionName}
                      className="product_work-img"
                    />
                  </div>
                  <div className="product-content ">
                    <ul className="product_description_list">
                      {ver.description.map((i, index) => (
                        <li key={index}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </Motion>
      {/* </div> */}
    </Motion>
  );
};

export default ProductDetails;
