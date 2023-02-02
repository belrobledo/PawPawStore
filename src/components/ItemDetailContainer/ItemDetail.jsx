import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

export default function ItemDetail({product, isInCart, onAddToCart}) {
  const {id, name, price, imgurl, detail, stock} = product;

  console.log("isIncart:", isInCart);

  return (
    <div className="container my-1">
      <div className='row item-detail'>
        <div className='col-sm-12 col-md-5'>
          <img className="img-fluid" src={imgurl} alt={name}/>
        </div>
        <div className='col-sm-12 col-md-7 text-center my-4'>
          <h4>{name}</h4>
          <h5><b>${price.toLocaleString()}</b></h5>
          <p>Stock: {stock}</p>
          {isInCart ?
            <Link to="/cart">Ir al carrito</Link>
          :
            <ItemCount stock={stock} onAddToCart={onAddToCart}/>
          }
        </div>
      </div>
    </div>
  )
}
