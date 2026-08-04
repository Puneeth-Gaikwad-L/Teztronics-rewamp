import data from "../data/products.json";

const { categories } = data;

export const CARD_DESCRIPTION_LIMIT = 140;

export function truncateText(text, limit = CARD_DESCRIPTION_LIMIT) {
  if (!text || text.length <= limit) return text;
  const sliced = text.slice(0, limit);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${sliced.slice(0, lastSpace > 0 ? lastSpace : limit).trimEnd()}…`;
}

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
