import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../components/ui/Loader";
import ItemContainer from "../features/products/ItemContainer";
import NoSearchMatch from "../features/search/NoSearchMatch";
import { useGetData } from "../services/useGetData";
import { setData } from "../store/slices/dataSlice";

function Home() {
  const { data, isLoading, error } = useGetData();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (data) {
        dispatch(setData(data));
      }
    },
    [dispatch, data],
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorBoundary />}
      {!isLoading && !error && (
        <div className="">
          <div className="grid grid-cols-4 gap-8 p-4">
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
