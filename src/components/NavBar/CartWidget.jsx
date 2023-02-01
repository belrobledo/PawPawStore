import { useContext, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { cartContext } from "../../storage/cartContext";
import CartContainer from "./CartContainer/CartContainer";
import "./CartWidget.css";

export default function CartWidget(){
    const {getTotalQuantity} = useContext(cartContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <button onClick={handleShow} className="ms-4 btn btn-primary border border-light rounded-pill px-3 py-1 position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {getTotalQuantity() > 0 && <span className="cart-amount" id="cantCarrito">{getTotalQuantity()}</span>}
            </button>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvas-cart">
                <Offcanvas.Header closeButton className="offcanvas-cart-bg">
                    <Offcanvas.Title><h4 className="my-1">Carrito</h4></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-cart-bg">
                    {getTotalQuantity() > 0 ?
                        <CartContainer handleClose={handleClose}/>
                    :
                        <p className="mx-4">El carrito está vacío.</p>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}