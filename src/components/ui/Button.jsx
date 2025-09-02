export default function Button({ children, type = "primary", onClick }) {
  const styles = {
    primary:
      "block rouned-md cursor-pointer border-none bg-orange-500 font-semibold text-white transition-all duration-400 ease-out",
    cancel:
      "flex h-[1rem] w-[1rem] cursor-pointer items-center justify-center rounded-full border-none bg-red-600 p-6 text-2xl font-semibold text-white",
    aggregate:
      "flex h-[1rem] w-[1rem] cursor-pointer items-center justify-center rounded-full border-none bg-amber-600 p-6 text-2xl font-semibold text-black",
    dark: "text-semibold block cursor-pointer rounded-full bg-black px-6 py-4 text-2xl text-white transition-all duration-25 ease-in hover:bg-stone-600",
    absolute:
      "text-1xl absolute top-3 right-4 rounded-full bg-red-400 px-4 py-2 font-bold text-white",
  };
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
