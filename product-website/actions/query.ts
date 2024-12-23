import { defineQuery } from "next-sanity";
import { Products } from "@/types/SanityResults";

export const HeaderQuery = defineQuery(
  `*[_type == "home"]{...,"imgUrl":imgUrl.asset->url}`
);

export const ProductQuery =
  defineQuery(`*[_type == "products"]{name,title,_id,tags,"imgUrl":thumbUrl.asset->url
    }`);

export const ServicesQuery =
  defineQuery(`*[_type == "services"]{...,"imgUrl":imgUrl.asset->url
    }`);

export const productFindQuery = (_id: Products["_id"]) =>
  defineQuery(`*[_type == "products" && _id match "${_id}"]{...,"versions":versions[]->{...},"imgUrl":thumbUrl.asset->url
    }`);

export const AboutQuery =
  defineQuery(`*[_type == "about"]{...,"imgUrl":imgUrl.asset->url
    }`);
