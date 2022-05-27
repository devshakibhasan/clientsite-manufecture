import React, { useEffect, useState } from 'react';
import ShowTools from '../ShowTools/ShowTools';
import './Review.css';
import { useNavigate } from 'react-router-dom';
import ReviewShow from '../Home/ReviewShow/ReviewShow';
const Review = () => {

    const navigate = useNavigate();
    const navigateToProductDetail = () => {
        navigate(`/manageproduct`);
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://manufecture-app.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="" className='container review'>
            <div className="row">
            <h2 class="text-center">Client's Review</h2>
                    <div className="review-container">
                    {
                        products.map(service => <ReviewShow
                            key={service.id}
                            service={service}
                        >
                        </ReviewShow>)
                    }
                </div>
                {/* <div class=" col-lg-4 col-md-6 col-sm-6 col-8 mb-4 manage-product">
                    <div class="card ripe-malinka-gradient form-white">
                        <div class="card-body">

                            <form className='d-flex flex-column'>
                                <h2 class="text-center font-up font-bold py-4 white-text">Manage Product</h2>



                                <div class="text-center">
                                    <button onClick={() => navigateToProductDetail()} className='btn btn-primary'>Manage</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Review;