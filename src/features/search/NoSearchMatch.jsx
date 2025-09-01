export default function NoSearchMatch() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 px-3 py-4 h-full">
        <img
          src="../../assets/no-search.svg"
          alt="no-items-match-search"
          className="w-[64px] h-[64px]"
        />
        <p className="italic text-3xl font-semibold">
          No items match your Search.
        </p>
      </div>
    </div>
  );
}
