import "./Card.css"
import { Link } from "react-router-dom";

function Card(props){
    const {id, name, price, imgurl, detail, stock} = props.product;
    
    return (
        <div className="d-flex align-content-stretch">
            <div className="card card-width m-1 p-3 pb-5 text-center shadow-sm">
                <img className="img-product" src={imgurl} alt={name}/>
                <h4>{name}</h4>
                <h5><b>${price.toLocaleString()}</b></h5>
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-outline-primary position-absolute bottom-0 end-0 m-3">Ver mas</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;