import { useEffect, useState } from "react"

const useProductDetails = productId =>{
    
    const [products, setProduct] = useState({});

    useEffect( () =>{
        fetch(`https://manufecture-app.herokuapp.com/tools/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productId]);

    return [products];
}

export default useProductDetails;