import React from 'react';
import './CartItem.css';

export default function CartItem({product}) {
  const {id, name, price, imgurl, detail, stock, quantity} = product;
    
  return (
    <div className='card-cart row mb-1 m-auto p-2 text-left position-relative'>
        <div className="col-4 my-auto">
            <img className="card-cart-img" src={imgurl} alt={name} />
        </div>
        <div className="col-8 p-0 lh-2 my-auto">
            <p className="card-cart-text my-auto"><b>{name}</b></p>
            <p className="card-cart-text my-auto">Cantidad: {quantity}</p>
            <p className="card-cart-text my-auto">Precio/u: ${price.toLocaleString()}</p>
        </div>
        <span className='w-auto mx-1 position-absolute end-0 bottom-0 btn-delete-product'><h4>x</h4></span>
    </div>
  )
}
