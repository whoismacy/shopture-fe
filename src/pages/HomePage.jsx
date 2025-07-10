import { useState, useEffect } from "react";
import "./HomePage.module.css";
import ItemContainer from "../components/common/ItemContainer";
import SortBy from "../components/common/SortBy";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  function handleData(d) {
    setData(d);
  }

  useEffect(function () {
    const controller = new AbortController();
    async function getData() {
      try {
        setError("");
        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to Fetch Information");

        const data = await response.json();

        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    }

    getData();

    return function () {
      controller.abort();
    };
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
              <ItemContainer item={item} key={item.id} />
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
