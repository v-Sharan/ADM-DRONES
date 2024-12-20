import Image from "next/image";
import { AppWrap } from "@/Wrapper";
import { Motion } from "@/components";
import { client } from "@/client";
import { ProductQuery } from "@/actions/query";
import { type Products } from "@/types/SanityResults";
import "./Products.scss";

const Products = async () => {
  const products = await client.fetch<Products[]>(ProductQuery);

  return (
    <>
      <h2 className="head-text">Products</h2>
      <Motion
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delayChildren: 0.6 }}
        className="app__work-portfolio"
      >
        {products.map((product, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={product.imgUrl} alt={product.title} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{product.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </Motion>
    </>
  );
};

export default AppWrap(Products, "products", "app__primarybg");
