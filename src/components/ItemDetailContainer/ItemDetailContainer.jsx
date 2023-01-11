import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services/mockService'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        getProduct(id).then((response) => {
            console.log("response:", response);
            setProduct(response);
            console.log("product:", product);
        }).catch((error) => {
            alert(error);
        })
    });

    if(product === []){
        return (
            <h1>Still loading...</h1>
            
        )
    }
    else {
        return (
            <h1>item detail</h1>
            /*<ItemDetail product={product} />*/
        )
    }
}
