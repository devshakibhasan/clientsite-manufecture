import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyOrder from '../../../Hoock/myOrder';
import './MyItemShow.css'; 

const MyItemShow = (props) => {

    const {product} = props;
    const navigate = useNavigate();
    const [products, setproducts] = MyOrder();
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




    // const {name, img, price, quantity} = product;
    return (
        <div className='myItem'>
              {/* <p>{product.product}</p>
              <img src={product.img} alt="" />
              <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button> */}
            <div>
                <img src={product.image} alt="" />
            </div>
            <div className="myItem-details-container">
                <div className="myItem-details">
                    <p className="product-name" title={product.product}>
                        { product.product.length > 20 ? product.product.slice(0, 20) + '...': product.product }
                    </p>
                    <p>Price: <span className='orange-color'>{product.price}</span></p>
           
                    <p><small>Quantity: {product.quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleDelete(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyItemShow;