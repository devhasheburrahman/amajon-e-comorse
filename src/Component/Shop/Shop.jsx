import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddTOCard = (product) => {
        const newCard = [...card, product];
        setCard(newCard);
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