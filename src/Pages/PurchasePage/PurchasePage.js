import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useProductDetails from '../../Hoock/useProductDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
import auth from '../../firebase.init';
import { Button } from 'bootstrap';
import { format } from 'date-fns';
import './Purchase.css'
import { addToDb, getStoredCart } from '../../utilities/db';
import useProducts from '../../Hoock/useProducts';
import Cart from '../Cart/Cart';
const PurchasePage = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);
    const [user] = useAuthState(auth);
    const [products, setProducts] = useProducts();
    console.log(products);
    const [cart, setCart] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();





    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            productId: productId,
            image: product.img,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://manufecture-app.herokuapp.com/myorder', order)
            .then(response => {
                const { data } = response;
                if (data.product) {
                    toast('Your order is booked!!!')
                    event.target.reset();
                } else {
                    toast.error(`Already have and appointment on ${data.order.product} at ${data.order.product}`)
                    event.target.reset();
                }
                console.log(response);
            })
    }


    const toolsq = product.minimum_order_quantity;
    console.log(toolsq);

    const [num, setIncDec] = useState(toolsq);

    const inNum = () => {
        setIncDec(num + 1);
    }

    const navigate = useNavigate();
    const navigateToProductDetail = () => {
        navigate(`/manageproduct`);
    }
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    // const handleAddToCart = (selectedProduct) => {
    //     console.log(selectedProduct);
    //     let newCart = [];
    //     const exists = cart.find(product => product._id === selectedProduct._id);
    //     if (!exists) {
    //         selectedProduct.quantity = 1;
    //         newCart = [...cart, selectedProduct];
    //     }
    //     else {
    //         const rest = cart.filter(product => product._id !== selectedProduct._id);
    //         exists.quantity = exists.quantity + 1;
    //         newCart = [...rest, exists];
    //     }

    //     setCart(newCart);
    //     addToDb(selectedProduct._id);
    // }


    useEffect(() => {
        fetch('https://manufecture-app.herokuapp.com/myorder')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    return (
        <div className='purchase'>
            {/* <h2>Welcome to detail: {product._id}</h2> */}



            <Container>
                <Row>
                    <Col>
                        <Card className='productCard'>
                            <Row>
                                <Col>
                                    <div>  <Card.Img variant="top" src={product.img} className='card-img' /></div>
                                </Col>
                                <Col>

                                    <a href=""><h2>{product.name}</h2></a>
                                    {/* <img src={product.img} alt="" /> */}
                                    <p>Price: {`${product.price}`}</p>

                                    <p><small>{product.description}</small></p>


                                    <p>Quantity: <small>{product.available_quantity}</small></p>


                                    <p>Quantity: <small>{product.minimum_order_quantity}</small></p>

                                    {/* <Card.Text>
                        <p>Supplier: <small>{supplier}</small></p>
                 purchase */}
                                    {/* <button className='btn btn-primary'>manage</button> */}

                                </Col>
                            </Row>
                            <Row>

                                <Col>
                                    <div className="cart-container2">
                                        <Cart cart={cart}>
                                            <Link to="/myItem">
                                                <button>Review Order </button>
                                            </Link>
                                        </Cart>
                                    </div>
                                </Col>
                            </Row>


                        </Card>

                    </Col>
                    <Col>
                        <div>
                            {/* <h2>Please order: {product.name}</h2> */}

                            <div class="container  addProduct-form Purchase-form">


                                <div class="row">

                                    <div class=" col-lg-12 col-md-12 col-sm-12 col-12 mb-4  me-5">
                                        <div class="card ripe-malinka-gradient form-white">
                                            <div class="card-body">

                                                <form className='d-flex flex-column' onSubmit={handlePlaceOrder}>
                                                    <h2 class="text-center font-up font-bold py-4 white-text">Place order Tools</h2>
                                                    <div class="md-form">
                                                        <i class="fa fa-user prefix white-text"></i>
                                                        <input type="text" id="orangeForm-name2" class="form-control" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                                                        <label for="orangeForm-name2"></label>
                                                        <div class="invalid-feedback">
                                                            Please provide a valid city.
                                                        </div>
                                                    </div>
                                                    <div class="md-form">
                                                        <i class="fa fa-envelope prefix white-text"></i>
                                                        <textarea type="text" id="orangeForm-email2" class="form-control" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                                                        <label for="orangeForm-email2"></label>
                                                    </div>


                                                    <div class="md-form">
                                                        <i class="fa fa-lock prefix white-text"></i>
                                                        <input type="text" id="orangeForm-pass2" class="form-control" value={` ${product.name}`} name="product" placeholder='product' required readOnly disabled/>
                                                        <label for="orangeForm-pass2"></label>
                                                    </div>
                                                    <div class="md-form">
                                                        <i class="fa fa-lock prefix white-text"></i>
                                                        <input type="image" id="orangeForm-pass2" class="form-control" value={` ${product.img}`} name="image" placeholder='image' required readOnly disabled />
                                                        <label for="orangeForm-pass2"></label>
                                                    </div>
                                                    <div class="md-form">
                                                        <i class="fa fa-envelope prefix white-text"></i>
                                                        <input id="orangeForm-email2" class="form-control" name="address" placeholder='address' autoComplete='off' required type='text' />
                                                        <label for="orangeForm-email2"></label>
                                                    </div>

                                                    <div class="md-form">
                                                        <i class="fa fa-envelope prefix white-text"></i>
                                                        <input id="orangeForm-email2" class="form-control" type="number" name="phone" placeholder='phone' required />
                                                        <label for="orangeForm-email2"></label>
                                                    </div>





                                                    <div class="text-center">
                                                        {/* <button onClick={() => handleAddToCart(products)} className='btn-cart'>
                                                            <p className='btn-text'>Add Item</p>

                                                        </button> */}
                                                        <input type="submit" className='bg-primary p-2' value='Place order' />
                                                    </div>
                                                    <ToastContainer />
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>




                



            </Container>

        </div>
    );
};

export default PurchasePage;