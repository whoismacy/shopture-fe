import Filter from "./Filter";
import Search from "./Search";

export default function SearchFilter() {
  return (
    <section className="flex gap-12">
      <Search />
      <Filter />
    </section>
  );
}
