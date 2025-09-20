import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBag, FaTrashAlt } from "react-icons/fa"; // Import FaTrashAlt for the "Remove" button
import toast from "react-hot-toast";
import StarRating from "../../components/ui/StarRating";
import { addItem, deleteItem, getItemById } from "../../store/slices/cartSlice";
import Button from "../../components/ui/Button";

export default function ItemContainer({ item }) {
  const dispatch = useDispatch();
  const {
    id,
    title,
    category,
    description,
    price,
    image,
    rating: { rate, count },
  } = item;

  const presentInCart = useSelector(getItemById(id));
  const cartItem = {
    id,
    title,
    price,
    category,
    description,
    unitPrice: price,
    quantity: 1,
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="relative flex h-64 w-full items-center justify-center p-4">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div className="flex-grow">
        <h3 className="mt-4 mb-3 truncate text-xl font-semibold text-stone-800">
          {title}
        </h3>
        <p className="mb-4 text-sm text-stone-500">{category}</p>
        <div className="mb-8 flex items-center">
          <StarRating
            star_rating={Math.round(rate)}
            size={16}
            color="oklch(55.3% 0.013 58.071)"
          />
          <span className="ml-6 text-sm text-stone-600">({count})</span>
        </div>
        <p className="mt-4 line-clamp-3 text-sm text-stone-700">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-800">
            KES {(price * 100).toLocaleString()}
          </span>
          <Button
            type={presentInCart ? "secondary" : "primary"}
            onClick={() => {
              if (presentInCart) {
                dispatch(deleteItem(cartItem.id));
                toast.error("Removed item from cart.");
              } else {
                dispatch(addItem(cartItem));
                toast.success("Added item to cart.");
              }
            }}
          >
            {presentInCart ? (
              <FaTrashAlt className="mr-2 text-base" />
            ) : (
              <FaShoppingBag className="mr-2 text-base" />
            )}
            {presentInCart ? "Remove" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}
