import React, { useEffect, useState } from 'react';

const MyReview = () =>{
    const [products, setproducts] = useState([]);

    useEffect( ()=>{
        fetch('https://manufecture-app.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setproducts(data));
    }, [])
    return [products, setproducts];

}

export default MyReview;