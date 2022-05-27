
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen, faEnvelope, faQuoteLeft, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './HappyClient.css'
import MyReview from '../../../Hoock/myReview';

const HappyClient = () => {




    var project = setInterval(projectDone, 5)
    var clients = setInterval(happyClients, 1)
    var coffee = setInterval(cupsCoffee, 5)
    var coffee1 = setInterval(cupsCoffee1, 5)
    let count1 = 1;
    let count2 = 1;
    let count3 = 1;
    let count4 = 1;

    function projectDone() {
        count1++
        document.querySelector("#number1").innerHTML = count1
        if (count1 == 120) {
            clearInterval(project)
        }
    }

    function happyClients() {
        count2++
        document.querySelector("#number2").innerHTML = count2
        if (count2 == 405) {
            clearInterval(clients)
        }
    }

    function cupsCoffee() {
        count3++
        document.querySelector("#number3").innerHTML = count3
        if (count3 == 359) {
            clearInterval(coffee)
        }
    }
    function cupsCoffee1() {
        count4++
        document.querySelector("#number4").innerHTML = count4
        if (count4 == 359) {
            clearInterval(coffee1)
        }
    }

 

    return (
        <div className='review'>


            <h2 class="text-center">We have been successfully available for five years.</h2>

            <div class="project-counter-wrp">
                <ul>
                    <li>
                        <i class="fa fa-briefcase"></i>
                        <p id="number1" class="number">120</p>
                        <span></span>
                        <p>Countries</p>
                    </li>
                    <li>
                        <i class="fa fa-smile-o"></i>
                        <p id="number2" class="number">405</p>
                        <span></span>
                        <p>Project Done</p>
                    </li>
                    <li>
                        <i class="fa fa-coffee"></i>
                        <p id="number3" class="number">359</p>
                        <span></span>
                        <p>Happy Clients</p>
                    </li>
                    <li>
                        <i class="fa fa-coffee"></i>
                        <p id="number4" class="number">359+</p>
                        <span></span>
                        <p>Feedbacks</p>
                    </li>
                </ul>
            </div>



 
            {


                // <div id="products" className='container'>

                //     <div className="row">
                //         <h1 className='text-primary text-center mt-5 mb-5'> My Orders</h1>
                //         <div className="tools-container">
                //             {
                //                 products.map(products =>


                //                     <div className='myItem'>

                //                         <div>
                //                             <img src={products.image} alt="" />
                //                         </div>
                //                         <div className="myItem-details-container">
                //                             <div className="myItem-details">
                //                                 <p className="product-name" title={products.product}>
                //                                     {products.product.length > 20 ? products.product.slice(0, 20) + '...' : products.product}
                //                                 </p>
                //                                 <p>Price: <span className='orange-color'>{products.price}</span></p>

                //                                 <p><small>Quantity: {products.quantity}</small></p>
                //                             </div>
                //                             <div className="delete-container">
                //                                 {/* <button onClick={() => handleDelete(products._id)} className='delete-button'>
                //                                     <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                //                                 </button> */}
                //                             </div>
                //                         </div>
                //                     </div>

                //                 )
                //             }
                //         </div>
                //     </div>
                //     <div>


                //     </div>
                // </div>



            }

            {/* <div class="wrapper">
                <div class="box">
                    <FontAwesomeIcon icon={faQuoteLeft} className='quote' />
                    <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                    <div class="content">
                        <div class="info">
                            <div class="name">Alex Smith</div>
                            <div class="job">Designer | Developer</div>
                            <div class="stars">
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStarHalfStroke} className='quote' />

                            </div>
                        </div>
                        <div class="image">
                            <img src="images/profile-1.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="box">
                    <FontAwesomeIcon icon={faQuoteLeft} className='quote' />
                    <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                    <div class="content">
                        <div class="info">
                            <div class="name">Steven Chris</div>
                            <div class="job">YouTuber | Blogger</div>
                            <div class="stars">
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStarHalfStroke} className='quote' />
                            </div>
                        </div>
                        <div class="image">
                            <img src="images/profile-2.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="box">
                    <FontAwesomeIcon icon={faQuoteLeft} className='quote' />
                    <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                    <div class="content">
                        <div class="info">
                            <div class="name">Kristina Bellis</div>
                            <div class="job">Freelancer | Advertiser</div>
                            <div class="stars">
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStar} className='quote' />
                                <FontAwesomeIcon icon={faStarHalfStroke} className='quote' />
                            </div>
                        </div>
                        <div class="image">
                            <img src="images/profile-3.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default HappyClient;