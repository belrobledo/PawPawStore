import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./CartWidget.css";

export default function CartWidget(){
    const {getTotalQuantity} = useContext(cartContext);

    return(
        <div>
            <button className="ms-4 btn btn-primary border border-light rounded-pill px-3 py-1 position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                {getTotalQuantity() > 0 && <span className="cart-amount" id="cantCarrito">{getTotalQuantity()}</span>}
            </button>
            <div className="offcanvas offcanvas-end bg-primary text-light" tabIndex="-1" id="offcanvasCart" width="450px">
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title" id="offcanvasCartLabel">Carrito</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    {/* carrito de compras */}
                </div>
            </div>
        </div>
    );
}