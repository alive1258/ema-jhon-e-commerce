import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getShoppingCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCard = getShoppingCart();
    // console.log(storedCard);
    let savedCard=[]
    //step 1 get id of the adddedProduct
    for (let id in storedCard) {
      // step 2 get  product from products state  by using id
      const addedProduct = products.find((product) => product.id === id);
      if(addedProduct){
          //step 3 add quantity of the product
        const quantity = storedCard[id];
          addedProduct.quantity = quantity;
        //   step 4 add the added product to saved cart
          savedCard.push(addedProduct)
      }
     
    }
     //step-5  set the cart
    setCart(savedCard)
  }, [products]);
  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
