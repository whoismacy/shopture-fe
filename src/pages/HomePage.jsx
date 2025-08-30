import Loader from "../components/ui/Loader";
import ItemContainer from "../features/products/ItemContainer";
import SortBy from "../features/search/SortBy";
import NoSearchMatch from "../features/search/NoSearchMatch";
import { useLoaderData, useNavigation } from "react-router-dom";

function Home() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container">
          <SortBy />
          <div className="Container">
            {data.map((item) => (
              <ItemContainer item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
      {!isLoading && data.length === 0 && <NoSearchMatch />}
    </>
  );
}

export default Home;
