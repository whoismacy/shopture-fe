import { useDispatch, useSelector } from "react-redux";
import StarRating from "../../components/ui/StarRating";
import { addItem, deleteItem, getItemById } from "../../store/slices/cartSlice";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
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
    <div className="max-w-4xs m-4 rounded-lg bg-white p-8 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="relative h-[300px] w-[300px]">
        <img
          src={image}
          alt={title}
          className="absolute top-1/2 left-1/2 h-auto max-h-[100%] w-auto max-w-[100%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h3 className="mt-6 mb-4 text-2xl">
        {title.length > 40 ? `${title.slice(0, 40)}...` : title}
      </h3>
      <p className="mb-4 font-light text-stone-400 italic">
        Category: {category}
      </p>
      <p className="mb-8 text-2xl font-medium text-stone-800 italic">
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <div className="mb-6 flex items-center gap-8">
        <StarRating star_rating={Math.round(rate)} size={24} color="red" />
        <span className="italic">{count} ratings.</span>
      </div>
      <div className="mt-12 flex items-center justify-between">
        <p className="text-2xl font-medium">
          KES <span className="mb-8 text-2xl font-bold">{price * 100}</span>
        </p>
        <Button
          type="primary"
          onClick={() => {
            if (presentInCart) {
              dispatch(deleteItem(cartItem.id));
              showErrorToast("Removed item from cart.");
            } else {
              dispatch(addItem(cartItem));
              showSuccessToast("Added item to cart.");
            }
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>
          {presentInCart ? "Remove" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
