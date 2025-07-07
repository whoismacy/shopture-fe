export default function SortBy({ data, onClickSet }) {
  function AlphabeticalSort() {
    const d = data.sort((a, b) =>
      a.title.localeCompare(b.title, { ignorePunctuation: true })
    );
    onClickSet(d);
  }
  function RecencySort() {
    onClickSet(data);
  }
  function PriceSort() {
    const d = data.sort((a, b) => a - b);
    onClickSet(d);
  }
  return (
    <>
      <div className="sortContainer">
        <button className="btn btnShopNow" onClick={() => RecencySort()}>
          Sort by Recency
        </button>
        <button className="btn btnShopNow" onClick={() => AlphabeticalSort()}>
          Sort by Alphabetical Order
        </button>
        <button className="btn btnShopNow" onClick={() => PriceSort()}>
          Sort by Price
        </button>
      </div>
    </>
  );
}
