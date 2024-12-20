import { defineQuery } from "next-sanity";

export const HeaderQuery = defineQuery(`*[_type == "home"]`);

export const ProductQuery =
  defineQuery(`*[_type == "products"]{...,"imgUrl":imgUrl.asset->url
    }`);
