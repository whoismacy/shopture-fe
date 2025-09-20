export default function Button({ children, type = "primary", onClick }) {
  const styles = {
    primary:
      "block px-6 py-4 rounded-full cursor-pointer border-none bg-stone-900 font-semibold text-white transition-all duration-400 ease-out hover:bg-orange-400 flex items-center justify-center gap-2",
    cancel:
      "flex h-[1rem] w-[1rem] cursor-pointer items-center justify-center rounded-full border-none bg-red-600 p-6 text-2xl font-semibold text-white",
    aggregate:
      "flex h-[1rem] w-[1rem] cursor-pointer items-center justify-center rounded-full border-none bg-amber-600 p-6 text-2xl font-semibold text-black",
    dark: "text-semibold block cursor-pointer rounded-full bg-black px-6 py-4 text-2xl text-white transition-all duration-25 ease-in hover:bg-stone-600",
    absolute:
      "absolute right-4 top-3 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500",
  };
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
