import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart =props.cart;
  //   const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (let product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  let tax = (totalPrice * 7) / 100;
  let grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>order summary</h2>
      <p>select items:{cart.length}</p>
      <p>Total price:${totalPrice}</p>
      <p>Total shipping:${totalShipping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <p>Grand Total:${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
