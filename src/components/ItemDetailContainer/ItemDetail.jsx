import React, { useEffect } from 'react'
import './ItemDetail.css'
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount'

export default function ItemDetail({product, isInCart, onAddToCart}) {
  const {id, name, price, imgurl, detail, stock} = product;
  const navigateTo = useNavigate();

  console.log("isIncart:", isInCart);

  useEffect(() => {
    !name && navigateTo("*");
}, [name]);

  return (
    <>
      {product.name &&
        <div className="container my-1">
          <div className='row item-detail'>
            <div className='col-sm-12 col-md-5'>
              <img className="img-fluid" src={imgurl} alt={name}/>
            </div>
            <div className='col-sm-12 col-md-7 text-center my-4'>
              <h4>{name}</h4>
              <h5><b>${price.toLocaleString()}</b></h5>
              <p className='text-muted'>Stock: {stock}</p>
              {isInCart ?
                <p className='alert alert-secondary mx-auto' style={{"width" : "fit-content"}}>El producto ya se encuentra en el Carrito</p>
              :
                <ItemCount stock={stock} onAddToCart={onAddToCart}/>
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}
