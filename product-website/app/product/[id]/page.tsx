import { productFindQuery } from "@/actions/query";
import { client, urlFor } from "@/client";
import { type Products } from "@/types/SanityResults";
import { Motion } from "@/components";
import React from "react";

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
      className={`app__flex`}
    >
      <div
        className="product"
        style={{
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h2 className="head-text">{products[0].title}</h2>
        <p>{products[0].description}</p>
        <h1>Versions</h1>
        <Motion
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delayChildren: 0.6 }}
          className="app__work-portfolio"
        >
          {products.map((product, index) => (
            <React.Fragment key={`${product._id}-${index}`}>
              {product.versions.map((ver) => (
                <React.Fragment key={`${ver._id}`}>
                  <div className="app__work-item app__flex" key={index}>
                    <div className="app__work-img app__flex">
                      <img
                        src={urlFor(ver.imgUrl).url()}
                        alt={ver.versionName}
                      />
                    </div>
                    <h1>{ver.versionName}</h1>

                    <div className="app__work-content app__flex">
                      <h4 className="bold-text">{ver.description}</h4>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </Motion>
      </div>
    </Motion>
  );
};

export default ProductDetails;
