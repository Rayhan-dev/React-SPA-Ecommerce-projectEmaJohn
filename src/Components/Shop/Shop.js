import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    let newCart = [];
    const addToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (exists) {
            exists.quantity = exists.quantity + 1;
            console.log(exists);
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest,exists];
        } else {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
        

    }
    useEffect(() => {
        let cartItems = [];
        const gettingStoredCart = getStoredCart();
        for (const id in gettingStoredCart) {
            const addedProducts = products.find(product => product.id === id);
            if (addedProducts) {
                const quantity = gettingStoredCart[id];
                addedProducts.quantity = quantity;
                cartItems.push(addedProducts);
            }
        }
        setCart(cartItems);
    },[products])
    return (
        <div>
            <Container>
            <div className="row">
                    <div className="col-md-9"> 
                        <div className="row">
                            {
                                products.map(product => <Products key={product.id} addToCart={addToCart} product={product}></Products>)
                            }
                            </div>
                    </div>
                    <div className="col-md-3">
                        <Cart cart={cart}></Cart>
                    </div>
               </div>
               </Container>
        </div>
    );
};

export default Shop;