import { useQuery } from "@tanstack/react-query";
import getData from "./getData";

export function useGetData() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["shoppingData"],
    queryFn: getData,
  });

  return { data, error, isLoading };
}
