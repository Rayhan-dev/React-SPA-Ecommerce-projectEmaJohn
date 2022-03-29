import { Button } from 'react-bootstrap';
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalShippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price*product.quantity ;
        totalShippingCost = totalShippingCost + product.shipping*product.quantity;
    }
    return (
        <div className='text-start sticky-top' >
            <h1>Order summery</h1>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShippingCost}</p>
            <p>Tax: { Math.floor(totalPrice*0.1) }</p>
            <h2>Grand Total: ${ totalPrice+totalShippingCost+Math.floor(totalPrice*0.1)}</h2>
            <Button variant="danger my-2">Clear Chart</Button> <br />
            <Button variant="success">Review Order</Button>
        </div>
    );
};

export default Cart;