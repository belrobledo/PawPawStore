import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProduct } from '../../services/firebase';
import { cartContext } from '../../storage/cartContext';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Loader from '../Loader/Loader';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [isInCart, setIsInCart] = useState(false);

    let {id} = useParams();
    const {addToCart} = useContext(cartContext);

    function handleAddToCart(count){
        setIsInCart(true);
        addToCart({...product, quantity: count});
        toast.success(`"${product.name}" x ${count}u. agregado al carrito.`);
    }

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
        <BreadCrumb currentPage="Detalle" />
        {loading ?
            <Loader/>
        :
            <ItemDetail product={product} isInCart={isInCart} onAddToCart={handleAddToCart}/>
        }
        </>
    )
}
