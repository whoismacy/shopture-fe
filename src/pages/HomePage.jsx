import { useItemContext } from "../features/products/context/useItemContext";
import Loader from "../components/ui/Loader";
import ItemContainer from "../features/products/ItemContainer";
import SortBy from "../features/search/SortBy";
import NoSearchMatch from "../features/search/NoSearchMatch";

export default function Home({ dispatch }) {
  const { searchedData: displayData, error, loading } = useItemContext();

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorComponent error={error} />}
      {!loading && !error && (
        <div className="container">
          <SortBy />
          <div className="Container">
            {displayData.map((item) => (
              <ItemContainer item={item} key={item.id} dispatch={dispatch} />
            ))}
          </div>
        </div>
      )}
      {!loading && !error && displayData.length === 0 && <NoSearchMatch />}
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
