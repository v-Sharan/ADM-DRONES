import { defineQuery } from "next-sanity";
import { Products } from "@/types/SanityResults";

export const HeaderQuery = defineQuery(`*[_type == "home"]{imgUrl,alt,_id}`);

export const ProductQuery =
  defineQuery(`*[_type == "products"]{name,title,_id,"imgUrl":thumbUrl
    }`);

export const ServicesQuery =
  defineQuery(`*[_type == "services"]{...,"imgUrl":imgUrl.asset->url
    }`);

export const productFindQuery = (_id: Products["_id"]) =>
  defineQuery(`*[_type == "products" && _id match "${_id}"]{
  ...,
  "versions":versions[]->{
    ...,
    "imgUrl":imgUrl
  },
}`);

export const AboutQuery = defineQuery(`*[_type == "about"]`);
