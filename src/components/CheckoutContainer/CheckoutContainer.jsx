import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/firebase';
import { cartContext } from '../../storage/cartContext';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import CheckoutCart from './CheckoutCart';
import CheckoutForm from './CheckoutForm';

export default function CheckoutContainer() {
    const { cart, getTotalPrice, getTotalQuantity, clearCart } = useContext(cartContext);
    const navigateTo = useNavigate();

    function handleCheckout(userData) {
        const items = cart.map(({id, name, price, quantity, imgurl}) => ({id, name, price, quantity, imgurl}));

        const order = {
            buyer: userData,
            items: items,
            total: getTotalPrice(),
            date: new Date()
        };

        createOrder(order).then( (id) => {
            clearCart();
            navigateTo(`/order/${id}`);
        })
    }

    return (
        <div className='container'>
            <BreadCrumb currentPage="Checkout"/>

            <div className="container mx-auto row g-5">
                <div className="col-md-5 order-md-last">
                    <CheckoutCart cart={cart} getTotalPrice={getTotalPrice} getTotalQuantity={getTotalQuantity}/>
                </div>
                <div className="col-md-7">
                    <CheckoutForm onCheckout={handleCheckout}/>
                </div>
            </div>

        </div>
    )
}
