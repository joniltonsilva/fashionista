import { getProductSlug } from "../utils/slugify";

let products = [];

const getProducts = async () => {
  if (products.length === 0) {
    const json = await (
      await fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    ).json();
    products = json.map(function (product) {
      return { ...product, slug: getProductSlug(product) };
    });
  }
  return products;
};

const getProductBySlug = async (slug) => {
  if (products.length === 0) products = await getProducts();
  const productSlug = products.find((product) => product.slug === slug);
  return productSlug;
};

const getProductByText = async (text) => {

  if (products.length === 0) products = await getProducts();
  const productFiltered = products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()));
  console.log(JSON.stringify(productFiltered));
  return productFiltered;
};

const api = {
  getProducts,
  getProductBySlug,
  getProductByText,
};

export default api;
