import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './product.css';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;

    const handleAddTOCard = props.handleAddTOCard;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4 className='product-name'> {name}</h4>
                <p>price:$ {price}</p>

                <p>Manufacturer : {seller}</p>
                <p>Ratting : {ratings} start</p>
            </div>
            <button onClick={() => handleAddTOCard(props.product)} className='Btn-Card'>
                Add to Card
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;