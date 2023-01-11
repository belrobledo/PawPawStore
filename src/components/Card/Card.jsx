import "./Card.css"
import { Link } from "react-router-dom";

function Card(props){
    const {id, name, price, imgurl, detail, stock} = props.product;
    
    return (
        <div className="card d-inline-flex m-1 p-3 text-center shadow-sm">
            <img className="img-product" src={imgurl} alt={name}/>
            <h4>{name}</h4>
            <h5><b>{price.toLocaleString()}</b></h5>
            <Link to={`/detail/${id}`}>
                <button className="btn btn-outline-primary">Ver mas</button>
            </Link>
        </div>
    );
}

export default Card;