import { useState, useEffect } from "react";
import ItemContainer from "../components/common/ItemContainer";
import SortBy from "../components/common/SortBy";

export default function Home({ dispatch }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  function handleData(d) {
    setData(d);
  }

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

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorComponent error={error} />}
      {!loading && !error && (
        <div className="container">
          <SortBy data={data} onClickSet={handleData} />
          <div className="Container">
            {data.map((item) => (
              <ItemContainer item={item} key={item.id} dispatch={dispatch} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Loader() {
  return <div className="loader"></div>;
}

function ErrorComponent({ error }) {
  return (
    <p style={{ color: "red", fontWeight: 600, fontSize: "24px" }}>
      ⚠️ {error}
    </p>
  );
}
