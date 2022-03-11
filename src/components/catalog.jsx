import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import {useEffect, useState} from "react";

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Data retreived");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(() =>{
        loadCatalog();
    });

    return(
        <div className="catalog">
            <h1>This is the Milspec Catalog!</h1>
            <h2>We have {products.length} Products!!</h2>
            {products.map((prod) => (<Product key={prod._id} title={prod.title} image={prod.image}/>))}

        </div>
    );
};

export default Catalog;