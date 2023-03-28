import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, price, name, quantity, seller, ratings } = props.product;
  const handelAddToCart = props.handelAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price:${price}</p>
        <p>Manufactureer:{seller}</p>
        <p>Rating:{ratings} Starts</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handelAddToCart(props.product)}
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
