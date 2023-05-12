import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;

    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + tax + totalShipping;

    // const {cart}=props;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:  {cart.length}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping Charge: ${totalShipping.toFixed(2)} </p>
            <p>Tax:$ {tax.toFixed(2)} </p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;