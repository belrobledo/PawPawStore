import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail(props) {
  const {id, name, price, imgurl, detail, stock} = props.product;
  console.log("product desde ItemDetail:", props.product);

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
          <ItemCount stock={stock}/>
        </div>
      </div>
    </div>
  )
}
