import React from 'react';
import './reviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviwItems = ({ product, handelRemoveToCart }) => {
    const { img, id, name, price, quantity } = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>  Price : <price:span className="orange-text">${price}</price:span> </p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <div>
                <button onClick={() => handelRemoveToCart(id)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviwItems;