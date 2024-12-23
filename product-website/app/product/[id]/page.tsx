import { productFindQuery } from "@/actions/query";
import { client } from "@/client";
import { type Products } from "@/types/SanityResults";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const _id = (await params).id;

  const products = await client.fetch<Products[]>(productFindQuery(_id));

  return (
    <div className="product">
      {products.map(
        ({ imgUrl, _id, description, title, versions, thumbUrl }) => (
          <div key={`key--${_id}`} className="product__item">
            <h1>{title}</h1>
            <img
              src={`${thumbUrl}?h=500&w=500`}
              // src={isMobile ? `${imgUrl}?h=300&w=300` : `${imgUrl}?h=400&w=400`}
              alt={`alt__${_id}`}
              className="img__product"
            />
            <p>{description}</p>
            <div>
              {versions?.map((version) => (
                <div key={version._id}>{version.versionName}</div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetails;
