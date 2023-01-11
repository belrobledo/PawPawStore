import React from 'react'

export default function ItemDetail(props) {
  const {id, name, price, imgurl, detail, stock} = props.product;

  return (
    <div className="container">
      <div className='row'>
        <div className='col-sm-12 col-md-6 border border-danger'>
          <img className="img-product img-fluid" src={imgurl} alt={name}/>
        </div>
        <div className='col-sm-12 col-md-6 border border-danger'>
          <h4>{name}</h4>
          <h5><b>{price.toLocaleString()}</b></h5>
        </div>
      </div>
    </div>
  )
}
