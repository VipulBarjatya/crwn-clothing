import Button from "../button/button.component";

import "./cart-drowdown.styles.scss";

const CartDrowdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button text="Go To Checkout"></Button>
    </div>
  );
};

export default CartDrowdown;
