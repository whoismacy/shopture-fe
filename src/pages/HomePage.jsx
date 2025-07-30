import { useState } from "react";
import { useItemContext } from "../contexts/useItemContext";
import Loader from "./Loader";
import ItemContainer from "../components/common/ItemContainer";
import SortBy from "../components/common/SortBy";

export default function Home({ dispatch }) {
  const { body, error, loading } = useItemContext();
  const [sorted, setSortedData] = useState(null);
  const displayData = sorted || body;

  function handleData(d) {
    setSortedData(d);
  }

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorComponent error={error} />}
      {!loading && !error && (
        <div className="container">
          <SortBy data={body} onClickSet={handleData} />
          <div className="Container">
            {displayData.map((item) => (
              <ItemContainer item={item} key={item.id} dispatch={dispatch} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ErrorComponent({ error }) {
  return (
    <p style={{ color: "red", fontWeight: 600, fontSize: "24px" }}>
      ⚠️ {error}
    </p>
  );
}
