export default function SortBy({ data, onClickSet }) {
  function AlphabeticalSort() {
    const sorted = [...data].sort((a, b) =>
      a.title.localeCompare(b.title, { ignorePunctuation: true })
    );
    onClickSet(sorted);
  }
  function CategorySort() {
    const sorted = [...data].sort((a, b) =>
      a.category.localeCompare(b.category, { ignorePunctuation: true })
    );
    onClickSet(sorted);
  }
  function PriceSort() {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    onClickSet(sorted);
  }
  return (
    <>
      <div className="sortContainer">
        <button className="btn btnShopNow" onClick={CategorySort}>
          Sort by Category
        </button>
        <button className="btn btnShopNow" onClick={AlphabeticalSort}>
          Sort by Alphabetical Order
        </button>
        <button className="btn btnShopNow" onClick={PriceSort}>
          Sort by Price
        </button>
      </div>
    </>
  );
}
