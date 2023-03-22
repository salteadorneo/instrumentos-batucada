import pkg from "unofficial-amazon-search";
const { searchAmazon } = pkg;

export async function searchProducts(query) {
  return await searchAmazon(query);
};