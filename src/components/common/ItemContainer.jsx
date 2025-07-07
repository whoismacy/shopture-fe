import StarRating from "./StarRating";

export default function ItemContainer({ item }) {
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
        {title.length > 100 ? `${title.slice(0, 100)}...` : title}
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
      <p className="itemCurrency">
        KShs.<span className="itemPrice">{price * 100}</span>
      </p>
      <button className="btn marg-top btnShopNow">Shop Now</button>
    </div>
  );
}
