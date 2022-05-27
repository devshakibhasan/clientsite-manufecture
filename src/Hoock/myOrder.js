// import { useEffect, useState } from "react"

// const MyOrder = () =>{
    
//     const [products, setProduct] = useState([]);

//     useEffect( () =>{
//         fetch('https://manufecture-app.herokuapp.com/myorder')
//         .then(res => res.json())
//         .then(data => setProduct(data),);
    
//     }, []);
//     return [products, setProduct];
  
// }

// export default MyOrder;



import React, { useEffect, useState } from 'react';

const MyOrder = () =>{
    const [products, setproducts] = useState([]);

    useEffect( ()=>{
        fetch('https://manufecture-app.herokuapp.com/myorder')
        .then(res => res.json())
        .then(data => setproducts(data));
    }, [])
    return [products, setproducts];

}

export default MyOrder;




