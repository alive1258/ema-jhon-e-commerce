import React from 'react';
import './Products.css'

const Product = (props) => {
    const {img,price,name,quantity,seller,ratings}=props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
        <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
           <p>Price:${price}</p>
           <p>Manufactureer:{seller}</p>
           <p>Rating:{ratings} Starts</p>
        </div>
        <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;