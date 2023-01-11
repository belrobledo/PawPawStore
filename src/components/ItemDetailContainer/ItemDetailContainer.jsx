import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../pages/Loading';
import { getProduct } from '../../services/mockService'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    let {id} = useParams();

    useEffect(() => {
        getProduct(id).then((response) => {
            console.log("response:", response);
            setProduct(response);
            console.log("product:", product);
        }).catch((error) => {
            alert(error);
        }).finally( () => setLoading(false))
    }, [id]);

    return (
        <>
        {loading ?
            <Loading/>
        :
            <ItemDetail product={product} />
        }
        </>
    )
}
