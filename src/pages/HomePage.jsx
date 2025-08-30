import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getLoadingStatus } from "../store/slices/dataSlice";
import Loader from "../components/ui/Loader";
import ItemContainer from "../features/products/ItemContainer";
import SortBy from "../features/search/SortBy";
import NoSearchMatch from "../features/search/NoSearchMatch";
import ErrorBoundary from "./ErrorBoundary";
import { getProducts } from "../store/slices/dataSlice";

function Home() {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(getLoadingStatus);
  const data = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isLoading = loadingStatus === "loading";
  const error = loadingStatus === "error";

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorBoundary />}
      {!isLoading && !error && (
        <div className="container">
          <SortBy />
          <div className="Container">
            {data?.map((item) => (
              <ItemContainer item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
      {!isLoading && !error && data?.length === 0 && <NoSearchMatch />}
    </>
  );
}

export default Home;
