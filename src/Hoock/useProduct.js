import { useEffect, useState } from "react"

const useProduct = () =>{
    
    const [products, setProduct] = useState([]);

    useEffect( () =>{
        fetch('https://manufecture-app.herokuapp.com/tools')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    return [products, setProduct];
}

export default useProduct;