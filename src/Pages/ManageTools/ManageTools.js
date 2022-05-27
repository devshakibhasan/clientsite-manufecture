
import React, { useEffect, useState } from 'react';
import { Card, button, Row, Col } from 'react-bootstrap';
import useProducts from '../../Hoock/useProducts';
import './ManageTools.css'
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
const ManageTools = () => {
    const [products, setproducts] = useProducts();

    const navigate = useNavigate();

    const navigateToAddProduct = () => {
        navigate(`/addproduct`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete a Product?')
        if (proceed) {
            const url = `https://manufecture-app.herokuapp.com/Browstools/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remain = products.filter(product => product._id !== id);
                    setproducts(remain);
                })
        }
    }
    return (
        <div>
            <PageTitle title="Manage Product"></PageTitle>

            {
                // products.map(products => <div key={products._id}>
                //     <h4>{products.name}</h4>
                //     <button onClick={() => handleDelete(products._id)}>delete</button>
                // </div>)

                <div id="products" className='container'>

                    <div className="row">
                        <h1 className='text-primary text-center mt-5 mb-5'> Manage Tools</h1>
                        <div className="tool-container">
                            {
                                products.map(products =>

                                    <Card className='productCard border-0'>
                                        <div>  <Card.Img variant="top" src={products.img} className='card-img' /></div>

                                        <Card.Body className='cardBody'>
                                             <a href=""><h2>{products.name}</h2></a>  
                                               <p>Price: {`${products.price}`}</p> 
                                           
                                                <p><small>{products.description}</small></p>
                                             

                                           
                                                <p>Quantity: <small>{products.quantity}</small></p>
                                             
                                           
                                                <p>Supplier: <small>{products.supplier}</small></p>
                                             
                                            <Row>
                                                <Col>
                                                    <button className='' onClick={() => navigateToAddProduct()}>Add product</button>
                                                </Col>
                                                <Col>
                                                    <button className='' onClick={() => handleDelete(products._id)}>Delete</button>
                                                </Col>
                                            </Row>

                                        </Card.Body>
                                    </Card>

                                )
                            }
                        </div>
                    </div>
                </div>



            }

        </div>
    );
};

export default ManageTools;