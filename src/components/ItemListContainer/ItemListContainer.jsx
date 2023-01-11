import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import getAllProducts, { getProductsByCategory } from '../../services/mockService'
import Card from "../Card/Card"
import Loading from "../../pages/Loading";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let {categoryid} = useParams();

    useEffect(() => {
        if(!categoryid){
            getAllProducts().then((response) => {
                setProducts(response);
              }).catch((error) => alert(error)
              ).finally( () => setLoading(false));
        } else{
            getProductsByCategory(categoryid).then((response) => {
                setProducts(response);
              }).catch((error) => alert(error)
              ).finally( () => setLoading(false));
        }
    }, [categoryid]);

    return (
        <>
        {loading ?
            <Loading/>
        :
            <div>
                <div className="container">
                {products.map((product) => <Card key={product.id} product={product}/>)}
                </div>
            </div>
        }
        </>
    );
}