import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import getAllProducts, { getProductsByCategory } from '../../services/mockService'
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Card from "../Card/Card"
import Loader from "../Loader/Loader";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let {categoryid} = useParams();

    useEffect(() => {
        setLoading(true);
        if(categoryid === "All"){
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
        <BreadCrumb currentPage={categoryid}/>

        {loading ?
            <Loader/>
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