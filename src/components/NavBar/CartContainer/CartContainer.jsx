import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { cartContext } from '../../../storage/cartContext'
import CartItem from './CartItem';

export default function CartContainer({handleClose}) {
    const { cart, getTotalPrice, clearCart, removeFromCart } = useContext(cartContext);

    function handleCleartCart(){
        Swal.fire({
            text: "Esta seguro que desea vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            buttonsStyling: "false",
            confirmButtonColor: "#7FBCD2",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                text: "Carrito vacio.",
                icon: "success",
                confirmButtonColor: "#7FBCD2",
              });
              clearCart();
            }
          });
    }

    return (
        <div className='container-fluid'>
            {cart.map((item) => <CartItem key={item.id} product={item} removeFromCart={removeFromCart}/>)}
            <h5 className='my-3 text-end'>TOTAL: ${getTotalPrice().toLocaleString()}</h5>

            <div className="btn-group d-flex justify-content-end">
                <button onClick={handleClose} className='btn btn-light opacity-75 flex-grow-0'><Link to="/checkout">Finalizar Compra</Link></button>
                <button onClick={handleCleartCart} className='btn btn-light opacity-75 flex-grow-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
                    </svg>
                </button>
            </div>
            
        </div>
    )
}