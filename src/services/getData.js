async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to Fetch Information");
    const data = await response.json();
    return data;
    //eslint-disable-next-line
  } catch (error) {
    throw new Error("Encountered error while fetching data");
  }
}

export default getData;
