import { AppWrap, MotionWrap } from "@/Wrapper";
import { Motion } from "@/components";
import { client, urlFor } from "@/client";
import { ProductQuery } from "@/actions/query";
import { type Products } from "@/types/SanityResults";
import Link from "next/link";
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
            <Link href={`/product/${product._id}`}>
              <div className="app__work-img app__flex">
                <img src={urlFor(product.imgUrl).url()} alt={product.title} />
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{product.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </Motion>
    </>
  );
};

export default AppWrap(
  MotionWrap(Products, "app__works"),
  "products",
  "app__primarybg"
);
