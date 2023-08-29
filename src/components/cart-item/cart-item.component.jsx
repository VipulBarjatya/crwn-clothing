import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h3 className="name">{name}</h3>
        <span className="price">
          ${price} * {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
