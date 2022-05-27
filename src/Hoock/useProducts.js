
import React, { useEffect, useState } from 'react';

const useProducts = () =>{
    const [products, setproducts] = useState([]);

    useEffect( ()=>{
        fetch('https://manufecture-app.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setproducts(data));
    }, [])
    return [products, setproducts];

}

export default useProducts;