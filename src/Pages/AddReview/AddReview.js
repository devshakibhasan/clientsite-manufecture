import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import MyReview from '../DashBoard/MyReview/MyReview';
import './AddReview.css'


const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const [user] = useAuthState(auth);
    const onSubmit = data => {
     
        console.log(data);
        const url = `https://manufecture-app.herokuapp.com/review`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log('success', data);
                alert('Product added successfully!!!');
                data.target.reset();
            })
    };

    return (

        <section className='addProduct'>
            <div className='w-50 mx-auto'>

                <div class="container mt-4 addProduct-form">


                    <div class="row">

                        <div class=" col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mt-5">
                            <div class="card ripe-malinka-gradient form-white">
                                <div class="card-body">

                                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                        <h2 class="text-center font-up font-bold py-4 white-text">Add a Review</h2>
                                        <div class="md-form">
                                            <i class="fa fa-user prefix white-text"></i>
                                            <input type="text" id="orangeForm-name2" class="form-control"  placeholder='User name' name="Name" {...register("name", { required: true })} />
                                            <label for="orangeForm-name2"></label>
                                            <div class="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div class="md-form">
                                            <i class="fa fa-lock prefix white-text"></i>
                                            <input type="text" id="orangeForm-pass2" class="form-control" disabled value={user?.email} placeholder='Your Email' {...register("email", { required: true })} />
                                            <label for="orangeForm-pass2"></label>
                                        </div>
                                        <div class="md-form">
                                            <i class="fa fa-envelope prefix white-text"></i>
                                            <textarea type="text" id="orangeForm-email2" class="form-control" placeholder='Add a review' {...register("review", { required: true })} />
                                            <label for="orangeForm-email2"></label>
                                        </div>
                                   
                                        {/* <div class="md-form">
                                            <i class="fa fa-envelope prefix white-text"></i>
                                            <input id="orangeForm-email2" class="form-control" placeholder='Product price' type='number' {...register("price", { required: true })} />
                                            <label for="orangeForm-email2"></label>
                                        </div> */}

                                        {/* <div class="md-form">
                                            <i class="fa fa-envelope prefix white-text"></i>
                                            <input id="orangeForm-email2" class="form-control" placeholder='Quantity' type='number' {...register("quantity", { required: true })} />
                                            <label for="orangeForm-email2"></label>
                                        </div> */}
                                         <div class="md-form">
                                            <i class="fa fa-lock prefix white-text"></i>
                                            <input type="text" id="orangeForm-pass2" class="form-control" placeholder='Your Profession' {...register("job", { required: true })} />
                                            <label for="orangeForm-pass2"></label>
                                        </div>

                                        <div class="md-form">
                                            <i class="fa fa-envelope prefix white-text"></i>
                                            <input id="orangeForm-email2" class="form-control" placeholder='User picture URL' type='text' {...register("img",)} />
                                            <label for="orangeForm-email2"></label>
                                        </div>

                                       
                                        <div class="text-center">
                                            <input type="submit" value='Add Review' className='bg-primary p-2' />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AddReview;



