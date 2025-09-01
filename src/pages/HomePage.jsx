import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getLoadingStatus,
  getProducts,
} from "../store/slices/dataSlice";
import Loader from "../components/ui/Loader";
import ItemContainer from "../features/products/ItemContainer";
import NoSearchMatch from "../features/search/NoSearchMatch";
import ErrorBoundary from "./ErrorBoundary";
import SearchFilter from "../features/search/SearchFilter";

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
        <div className="">
        <SearchFilter/>
          <div className="grid grid-cols-4 gap-8 p-4  ">
            {data?.map((item, index) => (
              <ItemContainer item={item} key={item?.id || index} />
            ))}
          </div>
        </div>
      )}
      {!isLoading && !error && data?.length === 0 && <NoSearchMatch />}
    </>
  );
}

export default Home;
