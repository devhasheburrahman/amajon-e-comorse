import React from 'react';
import './product.css'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className='product-name'> {name}</h4>
                <p>price:$ {price}</p>

                <p>Manufacturer : {seller}</p>
                <p>Ratting : {ratings} start</p>
            </div>
            <button className='Btn-Card'>Add to Card</button>
        </div>
    );
};

export default Product;