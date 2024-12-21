import { defineQuery } from "next-sanity";
import { Products } from "@/types/SanityResults";

export const HeaderQuery = defineQuery(`*[_type == "home"]`);

export const ProductQuery =
  defineQuery(`*[_type == "products"]{...,"imgUrl":imgUrl.asset->url
    }`);

export const ServicesQuery =
  defineQuery(`*[_type == "services"]{...,"imgUrl":imgUrl.asset->url
    }`);

export const productFindQuery = (_id: Products["_id"]) =>
  defineQuery(`*[_type == "products" && _id match ${_id}]{...,"imgUrl":imgUrl.asset->url
    }`);
