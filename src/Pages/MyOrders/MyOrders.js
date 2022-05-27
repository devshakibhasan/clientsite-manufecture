
import React, { useEffect, useState } from 'react';
import { Card, button, Row, Col } from 'react-bootstrap';
import useProducts from '../../Hoock/useProducts';
import './MyOrders.css'
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import MyOrder from '../../Hoock/myOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const MyOrders = () => {
    const [products, setproducts] = MyOrder();

    const navigate = useNavigate();

    const navigateToAddProduct = () => {
        navigate(`/addproduct`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete a Product?')
        if (proceed) {
            const url = `https://manufecture-app.herokuapp.com/myorder/${id}`
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
              

                <div id="products" className='container'>

                    <div className="row">
                        <h1 className='text-primary text-center mt-5 mb-5'> My Orders</h1>
                        <div className="tools-container">
                            {
                                products.map(products =>

                              
                                    <div className='myItem'>
                                    
                                        <div>
                                            <img src={products.image} alt="" />
                                        </div>
                                        <div className="myItem-details-container">
                                            <div className="myItem-details">
                                                <p className="product-name" title={products.product}>
                                                    {products.product.length > 20 ? products.product.slice(0, 20) + '...' : products.product}
                                                </p>
                                                <p>Price: <span className='orange-color'>{products.price}</span></p>

                                                <p><small>Quantity: {products.quantity}</small></p>
                                            </div>
                                            <div className="delete-container">
                                                <button onClick={() => handleDelete(products._id)} className='delete-button'>
                                                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                    <div>

                        
                    </div>
                </div>



            }
            




        </div>
    );
};

export default MyOrders;