import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../Hoock/useCart';
import useProducts from '../../../Hoock/useProducts';
import { addToDb, getStoredCart, removeFromDb } from '../../../utilities/db';
import Cart from '../../Cart/Cart';
import MyItemShow from '../MyOrderShow/MyItemShow';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './MyItem.css';
import AddItemShow from '../../AddItemShow/AddItemShow';
import MyOrder from '../../../Hoock/myOrder';

const MyItem = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const [cart, setCart] = useState([]);
    console.log(cart);
    const navigate = useNavigate();
    const [product, setproducts] = MyOrder();






    // useEffect( () =>{
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product._id === id);
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products])

    // const handleAddToCart = (selectedProduct) =>{
    //     console.log(selectedProduct);
    //     let newCart = [];
    //     const exists = cart.find(product => product._id === selectedProduct._id);
    //     if(!exists){
    //         selectedProduct.quantity = 1;
    //         newCart = [...cart, selectedProduct];
    //     }
    //     else{
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

    
    // const handleRemoveProduct = product =>{
    //     const proceed = window.confirm('Are you sure delete a Product?')
    //     if(proceed){
    //         const rest = products.filter(pd => pd._id !== product._id);
    //         setCart(rest);
    //         removeFromDb(product._id);
    //     }
       
    // }




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
                    const remain = product.filter(product => product._id !== id);
                    setproducts(remain);
                })
        }
    }

    return (
        <div className='shop-container'>
            <PageTitle title="My Item"></PageTitle>
            <div className="review-items-container">
                {
                    products.map(product => <MyItemShow
                        key={product._id}
                        product ={product}
                        // handleAddToCart={handleAddToCart}
                        handleRemoveProduct = {handleDelete}
                    ></MyItemShow>)
                 
                }
              
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button onClick={()=>navigate('/shipment')}>Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default MyItem;