import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './ShowTools.css';

const ShowTools = ({ service }) => {
    const { _id, name, img, description, price, available_quantity, minimum_order_quantity } = service;

    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className='service'>
            {/* <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToProductDetail(id)} className='btn btn-primary'>Book: {name}</button> */}

            <Card className='productCard1 border-0'>
                <div>  <Card.Img variant="top" src={img} className='card-img' /></div>

                <Card.Body className='cardBody'>
                   <a href=""><h2>{name}</h2></a> 
                    <p>Price: {`${price}`}</p>
               
                        <p className='p'>{description}</p>
                

                   
                        <p>Available Quantity: <small>{available_quantity}</small></p>
                  
                        <p>Minimum Quantity: <small>{minimum_order_quantity}</small></p>
               
                    {/* <Card.Text>
                        <p>Supplier: <small>{supplier}</small></p>
                    </Card.Text> */}
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary card-button'> Place order</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowTools;