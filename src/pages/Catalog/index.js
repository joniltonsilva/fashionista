import React, { useState, useEffect } from 'react'
import api from '../../services/api';

import './styles.css';
import Products from '../../containers/Products';

export default function Catalog() {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
      async function loadProducts() {
        const products = await api.getProducts();
        setProducts(products);             
      }
    
      loadProducts();
    }, [])

    return (
        <>      
            { products.length === 0 ? <span>Carregando...</span> : <Products products={products} /> }
        </>
    )
}
