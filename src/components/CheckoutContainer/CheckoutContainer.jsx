import React, { useContext } from 'react'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import { cartContext } from '../storage/cartContext';
import CheckoutCart from './CheckoutCart';
import CheckoutForm from './CheckoutForm';

export default function CheckoutContainer() {
    const { cart, getTotalPrice, getTotalQuantity } = useContext(cartContext);

    return (
        <div className='container'>
            <BreadCrumb currentPage="Checkout"/>

            <div className="container mx-auto row g-5">
                <div className="col-md-5 order-md-last">
                    <CheckoutCart cart={cart} getTotalPrice={getTotalPrice} getTotalQuantity={getTotalQuantity}/>
                </div>
                <div className="col-md-7">
                    <CheckoutForm/>
                </div>
            </div>

        </div>
    )
}
