import React from 'react';
import { Card ,Button } from 'react-bootstrap';

const Products = (props) => {
    const { id, name, img, price, seller, ratings } = props.product;
    const { addToCart, } = props;

    
    return (
        <div className='col-md-4'>
            <Card style={{ width: '20rem', height:'35rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-start'>
                    <Card.Title style={{ height:'3rem' }}>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <small>Manufacturer: {seller}</small><br />
                    <small>Ratings: {ratings} stars</small> <br />
                    <Button onClick={()=>addToCart(props.product)} variant="primary my-2">Go somewhere</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Products;