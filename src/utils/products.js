import data from "../data/products.json";

const { categories } = data;

export function getAllProducts() {
  const all = [];
  for (const cat of categories) {
    if (cat.subcategories?.length > 0) {
      for (const sub of cat.subcategories) {
        if (sub.products?.length > 0) all.push(...sub.products);
      }
    }
    if (cat.products?.length > 0) all.push(...cat.products);
  }
  return all;
}
