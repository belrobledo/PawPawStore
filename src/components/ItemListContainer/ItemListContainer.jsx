import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { getAllProducts, getProductsByCategory, getProductsByName } from '../../services/firebase';
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Card from "./Card";
import Loader from "../Loader/Loader";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let {categoryid, searchid} = useParams();

    useEffect(() => {
        setLoading(true);
        if(searchid){
            getProductsByName(searchid).then((response) => {
                setProducts(response);
              }).catch((error) => alert(error)
              ).finally( () => setLoading(false));
        } else{
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
        }
    }, [categoryid, searchid]);

    return (
        <>
        <BreadCrumb currentPage={categoryid || "Búsqueda"}/>

        {loading ?
            <Loader/>
        :
            <div className=" container d-flex flex-wrap justify-content-center">
                {products.map((product) => <Card key={product.id} product={product}/>)}
            </div>
        }
        </>
    );
}