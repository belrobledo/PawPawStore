import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../../storage/cartContext'
import CartItem from './CartItem';

export default function CartContainer() {
    const { cart, getTotalPrice } = useContext(cartContext);

    return (
        <div className='container-fluid'>
            {cart.map((item) => <CartItem key={item.id} product={item}/>)}
            <h5 className='my-3 text-end'>TOTAL: ${getTotalPrice().toLocaleString()}</h5>
        </div>
    )
}
