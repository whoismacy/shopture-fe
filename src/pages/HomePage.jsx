import { useItemContext } from "../features/products/context/useItemContext";
import Loader from "../components/ui/Loader";
import ItemContainer from "../features/products/ItemContainer";
import SortBy from "../features/search/SortBy";
import NoSearchMatch from "../features/search/NoSearchMatch";
import ErrorComponent from "../components/ui/ErrorComponent";
import { useLoaderData, useNavigation } from "react-router-dom";

function Home({ dispatch }) {
  const { searchedData: displayData, error, loading } = useItemContext();
  const data = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorComponent error={error} />}
      {!isLoading && !error && (
        <div className="container">
          <SortBy />
          <div className="Container">
            {data.map((item) => (
              <ItemContainer item={item} key={item.id} dispatch={dispatch} />
            ))}
          </div>
        </div>
      )}
      {!loading && !error && displayData.length === 0 && <NoSearchMatch />}
    </>
  );
}

export default Home;
