import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

export default function ItemDetail({product, onAddToCart}) {
  const {id, name, price, imgurl, detail, stock} = product;
  const [countInCart, setCountInCart] = useState(0);

  function handleAddToCart(count=-1){
    console.log("agregamos", count)
    setCountInCart(count);
  }

  return (
    <div className="container my-3">
      <div className='row item-detail'>
        <div className='col-sm-12 col-md-5'>
          <img className="img-fluid" src={imgurl} alt={name}/>
        </div>
        <div className='col-sm-12 col-md-7 text-center my-4'>
          <h4>{name}</h4>
          <h5><b>${price.toLocaleString()}</b></h5>
          <p>Stock: {stock}</p>
          {countInCart === 0 ?
            <ItemCount stock={stock} onAddToCart={handleAddToCart}/>
          :
            <Link to="/cart">Ir al carrito</Link>
          }
        </div>
      </div>
    </div>
  )
}
