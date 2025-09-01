import Filter from "./Filter";
import Search from "./Search";

export default function SearchFilter() {
  return (
    <section className="flex justify-center items-center gap-12 px-4 py-2">
      <Search />
      <Filter />
    </section>
  );
}
