import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import getAllProducts, { getProductsByCategory } from '../../services/mockService'
import Card from "../Card/Card"

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    let {categoryid} = useParams();

    useEffect(() => {
        if(!categoryid){
            getAllProducts().then((response) => {
                setProducts(response);
              }).catch((error) => alert(error));
        } else{
            getProductsByCategory(categoryid).then((response) => {
                setProducts(response);
              }).catch((error) => alert(error));
        }
    }, [categoryid]);

    return (
        <div>
            <div className="container">
              {products.map((product) => <Card key={product.id} product={product}/>)}
            </div>
        </div>
    );
}