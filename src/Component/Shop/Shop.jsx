import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

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
                <Cart cart={card}></Cart>
            </div>

        </div>
    );
};

export default Shop;