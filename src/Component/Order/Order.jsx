import React, { useState } from 'react';
import Cart from '../Cart/cart';
import { useLoaderData } from 'react-router-dom';
import ReviwItems from '../ReviwItems/ReviwItems';
import './order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);

    const handelRemoveToCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }
    // console.log(cart);

    return (
        <div className='shop-container'>
            <div className='review-container'>

                {
                    cart.map(product => <ReviwItems
                        key={product.id}
                        product={product}
                        handelRemoveToCart={handelRemoveToCart}
                    ></ReviwItems>)
                }

            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;