import StarRating from "./StarRating";

export default function ItemContainer({ item, dispatch }) {
  const {
    title,
    category,
    description,
    price,
    image,
    rating: { rate, count },
  } = item;
  return (
    <div className="itemContainer">
      <div className="itemImageContainer">
        <img src={image} alt={title} className="itemImage" />
      </div>
      <h3 className="itemTitle">
        {title.length > 40 ? `${title.slice(0, 40)}...` : title}
      </h3>
      <p className="itemCategory">Category: {category}</p>
      <p className="itemDescription">
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <div className="itemRating">
        <StarRating star_rating={Math.round(rate)} size={24} color="red" />
        <span className="itemRatingText">{count} ratings.</span>
      </div>
      <div className="priceButton">
        <p className="itemCurrency">
          KShs <span className="itemPrice">{price * 100}</span>
        </p>
        <button
          className="btn btnShopNow"
          onClick={() => dispatch({ type: "addToCart", load: item })}
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
          Add to Cart
        </button>
      </div>
    </div>
  );
}
