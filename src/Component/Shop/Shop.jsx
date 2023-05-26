import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);



    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            // console.log(id)
            const addedProduct = products.find(product => product.id === id);


            if (addedProduct) {

                const quantity = storedCart[id];
                // console.log(id,quantity)
                addedProduct.quantity = quantity;
                // console.log(addedProduct);

                saveCart.push(addedProduct)
            }

            setCard(saveCart);


        }

    }, [products])


    const handleAddTOCard = (product) => {
        const newCard = [...card, product];
        setCard(newCard);
        addToDb(product.id)
    }

    const handaleClearCart = () => {
        setCard([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {

                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddTOCard={handleAddTOCard}

                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart
                    cart={card}
                    handaleClearCart={handaleClearCart}
                >
                    <Link className='processed-link' to="/order">
                        <button className='btn-processed'>Order Review</button>
                    </Link >
                </Cart>
            </div>

        </div>
    );
};

export default Shop;