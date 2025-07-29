import { useState, useEffect } from "react";

export function useGetData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getData() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) throw new Error("Failed to Fetch Information");

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { data, error, loading };
}
