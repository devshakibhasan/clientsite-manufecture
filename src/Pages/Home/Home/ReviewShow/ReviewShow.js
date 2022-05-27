import { faQuoteLeft, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './ReviewShow.css';
{/* <a href="https://ibb.co/xfPTKxf"><img src="https://i.ibb.co/hZhzx3Z/profile-3.jpg" alt="profile-3" border="0"></a>
<a href="https://ibb.co/FgtYM9Y"><img src="https://i.ibb.co/bznvZxv/profile-2.jpg" alt="profile-2" border="0"></a> */}
const ReviewShow = ({ service }) => {
    const { _id, name, img, description, review,job } = service;

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

            <div class="wrapper">
                <div class="box">
                    <FontAwesomeIcon icon={faQuoteLeft} className='quote' />
                    <p>{review}</p>
                    <div class="content">
                        <div class="info">
                            <div class="name">{name}</div>
                            <div class="job">{job}</div>
                            <div class="stars">
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStarHalfStroke} className='quote' />

                            </div>
                        </div>
                        <div class="image">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
              
                
            </div>
        </div>
    );
};

export default ReviewShow;