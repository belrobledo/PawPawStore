import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getOrder } from '../../services/firebase';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Loader from '../Loader/Loader';
import OrderItem from './OrderItem';

export default function OrderContainer() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  let {orderid} = useParams();

  useEffect(() => {
    getOrder(orderid).then((response) => {
        console.log("response:", response);
        setOrder(response);
        console.log("order:", order);
    }).catch((error) => {
        alert(error);
    }).finally( () => setLoading(false))
  }, [orderid]);

  return (
    <>
      <BreadCrumb currentPage="Orden" />
      {loading ?
          <Loader/>
      :
          <div className='container'>
            <h3 className="text-success" id="ticketTitle">Gracias por tu compra, {order.buyer.name}!</h3>
            <h5 className='text-muted'>Nro. de Orden #{order.id}</h5>
            <h5 className="mt-4 mb-2">Resumen:</h5>
            {order.items.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
            <h5 className="mt-3 mb-2 text-end">TOTAL: ${order.total.toLocaleString()}</h5>
            <Link to="/"><p className="text-end">Seguir comprando</p></Link>
          </div>
      }
    </>
)
}
