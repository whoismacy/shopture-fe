export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch Products");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
