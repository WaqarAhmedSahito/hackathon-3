import { groq } from "next-sanity";
export const allProducts = groq`*[_type == "product"]`;
export const womenProducts = groq`*[_type == "product" && category == "women"]`;
export const menProducts = groq`*[_type == "product" && category == "men"]`;
export const kidsProducts = groq`*[_type == "product" && category == "kids"]`;