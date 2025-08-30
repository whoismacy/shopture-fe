import { fetchProducts } from "../services/getData";

export async function loader() {
  try {
    const products = await fetchProducts();
    return products;
  } catch {
    throw new Response("Failed to load products", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
